import { useContext } from "react";
import { FormContext } from "../context/FormContext";

// Custom hook för att förenkla användning av useContext i komponenterna
export default function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext måste användas inom FormProvider");
  }
  return context;
}