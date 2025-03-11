import dynamic from "next/dynamic";
import Image from "next/image";

import Date from "@/components/date";

import "@/style/post.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const hasPost = await import(`@/posts/${slug}.mdx`)
    .then(() => true)
    .catch(() => false);
  const { metadata } = hasPost
    ? await import(`@/posts/${slug}.mdx`)
    : { metadata: { title: "Post not found" } };

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://ehazel.com/post/${slug}`,
      siteName: "Ethan Hazel",
      images: [
        {
          url: `/images/posts/${slug}.webp`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: `/images/posts/${slug}.webp`,
      creator: "@EthanHazelGD",
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const hasPost = await import(`@/posts/${slug}.mdx`)
    .then(() => true)
    .catch(() => false);
  const BlogPost = hasPost
    ? dynamic(() => import(`@/posts/${slug}.mdx`), {
        loading: () => <p>Loading...</p>,
      })
    : () => <p>Post not found</p>;
  const { metadata } = hasPost
    ? await import(`@/posts/${slug}.mdx`)
    : { metadata: { title: "Post not found" } };

  return (
    <div className="post">
      <div className="post-header">
        <Image
          src={`/images/posts/${slug}.webp`}
          alt={metadata.title}
          width={1024}
          height={576}
          className="post-header-image"
        />
        <h1 className="post-title">{metadata.title}</h1>
        <p className="post-description">{metadata.description}</p>
        <span className="post-date">
          Posted <Date dateString={metadata.creationDate} />
        </span>
      </div>
      <div className="post-content">
        <BlogPost />
      </div>
    </div>
  );
}
