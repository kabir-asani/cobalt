"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Blog } from "../blog";

export default (props: { blog: Blog }) => {
  const pathname = usePathname();

  const path = `/blog/${props.blog.slug}`;

  return (
    <Link href={path} className={pathname == path ? "text-sm text-blue-700 font-bold" : "text-sm"}>
      {props.blog.title}
    </Link>
  );
};
