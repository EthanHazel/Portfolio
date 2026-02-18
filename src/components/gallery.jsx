import fs from "fs";
import path from "path";
import PostCard from "./post-card";

import "@/style/gallery.css";

const getCreationDate = (slug) => {
  let creationDate;
  try {
    const { metadata } = require(`@/posts/${slug}.mdx`);
    const splitDate = metadata.creationDate.split("/");
    creationDate = new Date(20 + splitDate[2], splitDate[0] - 1, splitDate[1]);
  } catch (error) {
    creationDate = new Date();
  }
  return creationDate;
};

export default function Gallery() {
  const postsDir = path.join(process.cwd(), "src", "posts");
  const fileNames = fs.readdirSync(postsDir);
  const slugs = fileNames.map((fileName) => fileName.replace(/\.[^.]+$/, ""));

  const slugsWithDates = slugs.map((slug) => ({
    slug,
    creationDate: getCreationDate(slug),
  }));

  slugsWithDates.sort((a, b) => b.creationDate - a.creationDate);

  return (
    <div className="gallery">
      {slugsWithDates.map(({ slug }) => (
        <PostCard key={slug} slug={slug} />
      ))}
    </div>
  );
}
