import Link from "next/link";
import { PropsWithChildren } from "react";
import BlogLink from "./components/BlogLink";
import { blogs } from "./blog";

export default (props: PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-64 pr-2">
        <ul className="flex flex-col list-none">
          {blogs.map((blog) => {
            return (
              <li key={blog.slug} className="py-2">
                <BlogLink blog={blog} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-screen border-r-[1px] border-r-[#EAEAEA]" />
      <div className="w-full pl-4">{props.children}</div>
    </div>
  );
};
