import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    authorName: z.string(),
  }),
  transform: async (post, ctx) => {
    const date = post._meta.fileName.slice(0, 10);
    return {
      ...post,
      date,
      body: await compileMDX(ctx, post),
    };
  },
});

export default defineConfig({
  collections: [posts],
});
