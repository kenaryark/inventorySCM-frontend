import React from "react";
import { createRoot } from "react-dom/client";
import { router } from "./App";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/themes/lara-dark-indigo/theme.css";
// import "primereact/resources/primereact.css";
import "./theme.css";
import "primereact/resources/primereact.min.css";
// import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <PrimeReactProvider>
        <CSSReset />
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </ChakraProvider>
  </StrictMode>
);
