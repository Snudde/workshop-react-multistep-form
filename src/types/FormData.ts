export interface FormData {
  // Steg 1: Personlig information
  firstName: string;
  lastName: string;
  email: string;

  // Steg 2: Adress
  street: string;
  zipCode: string;
  city: string;

  // Steg 3: Preferenser
  newsletter: boolean;
  darkMode: boolean;
  language: string;
}

export const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  street: "",
  zipCode: "",
  city: "",
  newsletter: false,
  darkMode: false,
  language: "sv",
};
