import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const createDOMPurify = require("dompurify");
const DOMPurify = createDOMPurify(window);

export function sanitizeHTMLOnServer(dirty) {
  return DOMPurify.sanitize(dirty);
}

export function extractTextFromHTML(html, maxLength = 550) {
  const dom = new JSDOM(html);
  const text = dom.window.document.body.textContent || "";
  return text.trim().slice(0, maxLength) + "...";
}

export function sanitizeTextOnServer(dirty) {
  const sanitized = DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
  return sanitized.replace(/[^a-zA-Zآ-ی0-9۰-۹ .,!?؟؛،:()\[\]{}'"«»\-]/g, "");
}
