import Link from "next/link";
import { PropsWithChildren } from "react";
import BlogLink from "./components/BlogLink";

export default (props: PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-48">
        <ul className="flex flex-col list-none">
          {[1, 2, 3, 4].map((slug) => {
            return (
              <li key={slug}>
                <BlogLink slug={slug.toString()} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full">{props.children}</div>
    </div>
  );
};
