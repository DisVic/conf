import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/context.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProductsProvider>
  );
} else {
  console.error("Element with id 'root' not found in the DOM.");
}
