const fs = require("fs");
const readline = require("readline");

const postsDir = "./src/posts";
const imagesDir = "./public/images/posts";

let slug;

// Ask user for a slug
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const slugRegex = /^[a-z0-9-]+$/;

rl.question("Please enter a slug: ", (slugInput) => {
  if (slugRegex.test(slugInput)) {
    slug = slugInput;
    rl.close();
  } else {
    console.log("Slug must only contain a-z, 0-9 and -");
    rl.setPrompt("Please try again: ");
    rl.prompt();
  }
});

rl.on("close", () => {
  fs.mkdirSync(imagesDir + "/" + slug);

  // Copy template image to new folder
  fs.copyFileSync(
    "./scripts/create/template-image.webp",
    imagesDir + "/" + slug + "/main.webp"
  );

  // Copy template post to posts folder
  fs.copyFileSync(
    "./scripts/create/template-post.mdx",
    postsDir + "/" + slug + ".mdx"
  );

  console.log("Done!");
});
