import { serviceGetBlogs } from "@/app/_data/blog/blogServices";
import Link from "next/link";
import DeleteButtonBlog from "../_components/DeleteButtonBlog";

export function Th({ children, row = false, center = false }) {
  return (
    <th
      className={`${row ? "w-[50px]" : "w-[280px]"} h-full flex ${center ? "justify-center" : "justify-start"} items-center line-clamp-1 leading-7 ${row && "px-1"}`}
    >
      {children}
    </th>
  );
}
export function Td({ children, row = false, center = false }) {
  return (
    <th
      className={`${row ? "w-[50px]" : "w-[280px]"} h-full flex ${center ? "justify-center" : "justify-start"} items-start line-clamp-1 leading-7 ${row && "px-2"}`}
    >
      {children}
    </th>
  );
}

export default async function Page() {
  const blogs = await serviceGetBlogs();
  return (
    <div className="w-full flex flex-col items-start justify-start mt-5">
      <div className="w-full h-fit flex ">
        <Link
          className="w-full md:w-52  h-10 flex items-center justify-center bg-folly-500 text-white  px-5 py-1 mt-2 rounded-lg hover:bg-ghost-400 transition duration-300"
          href="/dashboard/blogs/new"
        >
          پست جدید
        </Link>
      </div>
      <table className="w-[95%] flex flex-col overflow-x-scroll">
        <thead className="w-full">
          <tr className="w-fit h-12 flex items-center justify-start  cursor-default bg-ghost-500 text-white my-5  px-2 rounded">
            <Th row>شماره</Th>
            <Th center>عنوان</Th>
            <Th center>نویسنده</Th>
            <Th>تاریخ انتشار</Th>
            <Th center>عملیات</Th>
          </tr>
        </thead>
        {blogs &&
          blogs.map((blog, index) => (
            <tbody key={blog.id} className="w-fit md:w-full flex flex-col ">
              <tr className="w-fit h-12 flex items-center justify-start cursor-default bg-ghost-100 text-ghost-600 my-5 p-2  rounded">
                <Td row>{index + 1}</Td>
                <Td>{blog.title}</Td>
                <Td center>{blog.author}</Td>
                <Td center>{/* Date */}</Td>
                <Td center>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="w-fit md: text-xs text-green-600 p-2 rounded-lg"
                  >
                    مشاهده
                  </Link>
                  <Link
                    href={`/dashboard/blog/${blog.id}`}
                    className="text-xs text-green-600 p-2 rounded-lg"
                  >
                    ویرایش
                  </Link>
                  <DeleteButtonBlog blogId={blog.id} />
                </Td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}
