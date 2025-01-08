import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyErrorBoundary from './pages/error-page/ErrorBoundery.tsx';

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyErrorBoundary>
      <App />
    </MyErrorBoundary>
  </StrictMode>
);
