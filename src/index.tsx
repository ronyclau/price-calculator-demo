import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

if (_IS_DEV_) {
  // esbuild live reload
  new EventSource("/esbuild").addEventListener("change", (e) => {
    const { added, removed, updated } = JSON.parse(e.data);

    if (added.length === 0 && removed.length === 0 && updated.length === 1) {
      for (const link of document.getElementsByTagName("link")) {
        const url = new URL(link.href);

        if (url.host === location.host && url.pathname === updated[0]) {
          const next = link.cloneNode() as HTMLLinkElement;
          next.href = updated[0] + "?" + Math.random().toString(36).slice(2);
          next.addEventListener("load", () => link.remove());
          link.parentNode?.insertBefore(next, link.nextSibling);
          return;
        }
      }
    }

    location.reload();
  });
}
