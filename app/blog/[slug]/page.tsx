import { use } from "react";
import { blogs } from "../blog";

export default (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(props.params);
  const blog = blogs.find((blog) => {
    return blog.slug === slug;
  });

  if (!blog) {
    return <div className="text-center h-screen">😭😭😭 Blog Not Found</div>;
  }

  return (
    <article>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-xl text-gray-400">{blog.subtext}</p>
      </div>
    </article>
  );
};
