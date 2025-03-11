"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./logo";
import "@/style/navbar.css";
import { ChevronLeft, Send } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {pathname === "/" ? null : <div className="navbar-margin" />}
      <div className={`navbar${scrolled ? " scrolled" : ""}`}>
        {pathname === "/" ? (
          <div className="navbar-spacer" />
        ) : (
          <Link href="/" className="navbar-button">
            <ChevronLeft /> <span className="navbar-button-text">Home</span>
          </Link>
        )}
        <Link href="/" className="navbar-logo">
          <Logo />
        </Link>
        <a href="mailto:contact@ehazel.com" className="navbar-button">
          <Send /> <span className="navbar-button-text">Contact Me</span>
        </a>
      </div>
    </>
  );
}
