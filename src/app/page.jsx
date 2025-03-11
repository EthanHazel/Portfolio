import { ChevronDown, Github, Twitter, Linkedin } from "lucide-react";

import Gallery from "@/components/gallery";

import "@/style/home.css";

export default function Home() {
  return (
    <div>
      <div className="home-header">
        <h2 className="home-header-subtitle">Web Designer & Developer</h2>
        <h1 className="home-header-title">What's up? I'm Ethan Hazel</h1>
        <div>
          <a
            href="/github"
            target="_blank"
            rel="noopener noreferrer"
            className="home-header-icon"
          >
            <Github size={32} />
          </a>
          <a
            href="/twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="home-header-icon"
          >
            <Twitter size={32} />
          </a>
          <a
            href="/linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="home-header-icon"
          >
            <Linkedin size={32} />
          </a>
        </div>
        <ChevronDown size={32} className="home-header-arrow" />
      </div>
      <Gallery />
    </div>
  );
}
