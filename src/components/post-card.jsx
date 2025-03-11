import Image from "next/image";
import Link from "next/link";

import Date from "./date";

import "@/style/post-card.css";

export default async function PostCard({ slug }) {
  const hasPost = await import(`@/posts/${slug}.mdx`)
    .then(() => true)
    .catch(() => false);
  const { metadata } = hasPost
    ? await import(`@/posts/${slug}.mdx`)
    : { metadata: { title: "Post not found" } };
  return (
    <Link className="post-card" href={`/post/${slug}`}>
      <Image
        src={"/images/posts/" + slug + ".webp"}
        alt={metadata.title}
        width={400}
        height={225}
        className="post-card-image"
      />
      <h1 className="post-card-title">{metadata.title}</h1>
      <p className="post-card-description">{metadata.description}</p>
      <Date className="post-card-date" dateString={metadata.creationDate} />
    </Link>
  );
}
