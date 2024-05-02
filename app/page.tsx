import { allPosts } from "content-collections";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post._meta.path}>
            <Link href={`/posts/${post._meta.path}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
