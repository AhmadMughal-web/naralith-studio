
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import "./index.css";
import App from "./App.jsx";

OverlayScrollbars(document.body, {
  scrollbars: {
    theme: "os-theme-naralith",
    autoHide: "leave",
    autoHideDelay: 400,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);