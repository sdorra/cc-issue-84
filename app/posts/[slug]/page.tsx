import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "content-collections";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export function generateStaticParams() {
  return allPosts.map((p) => ({
    slug: p._meta.path,
  }));
}

export const dynamicParams = false;

export default function Page({ params: { slug } }: Props) {
  const post = allPosts.find((p) => p._meta.path === slug);
  if (!post) {
    return notFound();
  }
  return (
    <>
      <Link href="/">Back</Link>
      <article>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <p>By {post.authorName}</p>
        <p>{post.date}</p>
        <div>
          <MDXContent code={post.body} />
        </div>
      </article>
    </>
  );
}
