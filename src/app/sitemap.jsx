import fs from "fs";
import path from "path";

const URL = "https://www.ehazel.com";

export default function sitemap() {
  const postsDir = path.join(process.cwd(), "src", "posts");
  const fileNames = fs.readdirSync(postsDir);
  const slugs = fileNames.map((fileName) => fileName.replace(/\.[^.]+$/, ""));

  const getCreationDate = (slug) => {
    let creationDate;
    try {
      const { metadata } = require(`@/posts/${slug}.mdx`);
      const splitDate = metadata.creationDate.split("/");
      creationDate = new Date(
        20 + splitDate[2],
        splitDate[0] - 1,
        splitDate[1]
      );
    } catch (error) {
      creationDate = new Date();
    }
    return creationDate;
  };

  function posts() {
    return slugs.map((slug) => ({
      url: `${URL}/post/${slug}`,
      lastModified: getCreationDate(slug),
      changeFrequency: "yearly",
      priority: 0.8,
    }));
  }

  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...posts(),
  ];
}
