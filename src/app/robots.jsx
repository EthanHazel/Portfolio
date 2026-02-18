const SITE_URL = "https://www.ehazel.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/x", "/github", "/twitter", "/linkedin"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
