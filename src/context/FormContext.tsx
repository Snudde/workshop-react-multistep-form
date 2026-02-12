import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { initialFormData } from "../types/FormData";
import type { FormData } from "../types/FormData";

interface FormContextType {
  formData: FormData;
  updateFormData: (fields: Partial<FormData>) => void;
}

export const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

