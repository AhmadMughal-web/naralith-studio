
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

OverlayScrollbars(document.body, {
  scrollbars: {
    theme: "os-theme-naralith",
    autoHide: "leave",
    autoHideDelay: 400,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);