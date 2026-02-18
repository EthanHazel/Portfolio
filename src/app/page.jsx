import { ChevronDown } from "lucide-react";
import { SiGithub, SiX, SiDiscord } from "@icons-pack/react-simple-icons";
import IllegalIcon from "@/components/illegal-icon";

import Gallery from "@/components/gallery";

import "@/style/home.css";

export default function Home() {
  return (
    <div>
      <div className="home-header">
        <h2 className="home-header-subtitle">Web Designer & Developer</h2>
        <h1 className="home-header-title">I'm Ethan Hazel. What's up?</h1>
        <div>
          <a
            href="/github"
            target="_blank"
            rel="noopener noreferrer"
            className="home-header-icon"
          >
            <SiGithub size={32} />
          </a>
          <a
            href="/twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="home-header-icon"
          >
            <SiX size={32} />
          </a>
          <a
            href="/linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="home-header-icon"
          >
            <IllegalIcon size={32} />
          </a>
          <a
            href="/discord"
            target="_blank"
            rel="noopener noreferrer"
            className="home-header-icon"
          >
            <SiDiscord size={32} />
          </a>
        </div>
        <ChevronDown size={32} className="home-header-arrow" />
      </div>
      <Gallery />
    </div>
  );
}
