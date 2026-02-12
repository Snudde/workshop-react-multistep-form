import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// TODO: importera FormProvider från "./context/FormContext"
import { FormProvider } from "./context/FormContext";
import { RouterProvider } from "react-router/dom";
import router from './router';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormProvider> 
     <RouterProvider router={router} />
    </FormProvider>
  </StrictMode>
);
