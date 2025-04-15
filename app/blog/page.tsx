import Link from "next/link";
import { blogs } from "./blog";

export default () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <h1 className="text-4xl font-bold">Blogs</h1>
      <ul className="flex flex-col items-start list-disc">
        {blogs.map((blog) => {
          return (
            <li key={blog.slug}>
              <Link href={`/blog/${blog.slug}`} className="underline text-blue-600">
                {blog.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
