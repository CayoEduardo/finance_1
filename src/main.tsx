import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FinanceProvider from "./hooks/useFinance.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FinanceProvider>
      <App />
    </FinanceProvider>
  </StrictMode>
);
