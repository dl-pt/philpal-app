import "@/main.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/App";

const root = document.getElementById("root");
if (root === null) throw Error(`No element has an ID of "root".`);

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
