import { use } from "react";

export default (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(props.params);

  return <h1>Blog {slug}</h1>;
};
