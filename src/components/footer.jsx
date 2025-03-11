import Image from "next/image";

import "@/style/footer.css";

import Logo from "./logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <Logo size={32} color="#777" />
        <p>Ethan Hazel © {currentYear}, All Rights Reserved</p>
      </div>
      <Image
        src="/images/netscani.gif"
        alt="important badge"
        width={88}
        height={31}
      />
    </div>
  );
}
