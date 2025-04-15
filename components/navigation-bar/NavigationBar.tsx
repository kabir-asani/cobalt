"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../container/Container";

export default () => {
  const path = usePathname();

  const paths = {
    home: "/",
    enterprise: "/enterprise",
    pricing: "/pricing",
    blog: "/blog",
  };

  return (
    <Container>
      <nav>
        <ul className="flex flex-row items-center justify-stretch gap-8 list-none py-4">
          <li key={paths.home} className={path == paths.home ? "text-blue-800 font-bold" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li key={paths.enterprise} className={path == paths.enterprise ? "text-blue-800 font-bold" : ""}>
            <Link href={paths.enterprise}>Enterprise</Link>
          </li>
          <li key={paths.pricing} className={path == paths.pricing ? "text-blue-800 font-bold" : ""}>
            <Link href={paths.pricing}>Pricing</Link>
          </li>
          <li key={paths.blog} className={path.startsWith(paths.blog) ? "text-blue-800 font-bold" : ""}>
            <Link href={paths.blog}>Blog</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
