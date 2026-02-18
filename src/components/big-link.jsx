import React from "react";
import Link from "next/link";

export default function BigLink({
  href,
  target,
  rel,
  icon = "SquareArrowOutUpRight",
  name = "Link",
  download = false,
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className="big-link"
      download={download}
    >
      {React.createElement(
        React.lazy(() =>
          import(`lucide-react`).then((m) => ({ default: m[icon] }))
        )
      )}
      <span className="big-link-name">{name}</span>
    </Link>
  );
}
