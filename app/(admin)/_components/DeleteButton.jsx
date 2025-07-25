"use client";

import { actionContactRemoveMessage } from "@/app/_data/messages/messageActions";

export default function DeleteButton({ id }) {
  return (
    <button
      className="w-32 rounded-lg p-2 mt-5 bg-folly-500 text-white "
      onClick={async () => {
        const confirmed = confirm("مطمئنی ؟");
        if (confirmed) actionContactRemoveMessage(id);
      }}
    >
      حذف پیام
    </button>
  );
}
