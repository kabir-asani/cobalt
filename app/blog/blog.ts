export type Blog = {
  slug: string;
  title: string;
  subtext: string;
};

export const blogs: Blog[] = [
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript",
    subtext: "A complete guide to leveling up your TypeScript skills.",
  },
  {
    slug: "modern-css-tricks",
    title: "Modern CSS Tricks",
    subtext: "Lesser-known CSS techniques to enhance your UI.",
  },
  {
    slug: "building-rest-apis",
    title: "Building REST APIs in Node.js",
    subtext: "Learn how to design and build robust RESTful APIs.",
  },
  {
    slug: "nextjs-performance-boost",
    title: "Boosting Next.js Performance",
    subtext: "Optimize your Next.js apps for speed and efficiency.",
  },
  {
    slug: "graphql-vs-rest",
    title: "GraphQL vs REST: The Real Difference",
    subtext: "Breaking down when to use GraphQL over REST APIs.",
  },
  {
    slug: "figma-to-code",
    title: "From Figma to Code",
    subtext: "Best practices to turn design files into clean code.",
  },
  {
    slug: "ai-in-web-development",
    title: "AI in Web Development",
    subtext: "Exploring how AI is transforming modern web apps.",
  },
  {
    slug: "state-management-guide",
    title: "The Ultimate State Management Guide",
    subtext: "Redux, Zustand, Jotai — choosing the right tool.",
  },
  {
    slug: "writing-clean-code",
    title: "Writing Clean Code in JavaScript",
    subtext: "Tips and techniques for writing maintainable code.",
  },
  {
    slug: "tailwind-best-practices",
    title: "Tailwind CSS Best Practices",
    subtext: "Crafting scalable and maintainable UI with Tailwind.",
  },
];
