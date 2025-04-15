"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default (props: { slug: string }) => {
  const pathname = usePathname();

  const path = `/blog/${props.slug}`;

  return (
    <Link href={path} className={pathname == path ? "text-blue-700" : ""}>
      Blog {props.slug}
    </Link>
  );
};
