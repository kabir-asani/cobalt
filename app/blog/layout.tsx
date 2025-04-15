import Link from "next/link";
import { PropsWithChildren } from "react";
import BlogLink from "./components/BlogLink";
import { blogs } from "./blog";

export default (props: PropsWithChildren) => {
  return <>{props.children}</>;
};
