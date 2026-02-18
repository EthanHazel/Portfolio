import { Toilet, ArrowRight, Link } from "lucide-react";

import "@/style/not-found.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-icons">
        <Link size={64} />
        <ArrowRight size={32} className="not-found-arrow" />
        <Toilet size={64} />
      </div>
      <h1>You sure that's the right URL?</h1>
      <p>
        Could not find the page you are looking for. Either this page does not
        exist or it has been removed.
      </p>
    </div>
  );
}
