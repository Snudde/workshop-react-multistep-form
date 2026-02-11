# Workshop: React Router 7 & useContext

Bygg ett multistepformulär med routing mellan stegen och delad state via Context.


## Del 1: React Router 7

### 1.1 Installera react-router

```bash
npm install react-router
```

### 1.2 Skapa router-filen

Skapa `src/router.tsx`. Använd `createBrowserRouter` för att definiera routes.

Använd `FormLayout` som layout-route (parent) och steg-komponenterna som children:

| Sökväg | Komponent |
|--------|-----------|
| `/` | `StepPersonalInfo` |
| `/address` | `StepAddress` |
| `/preferences` | `StepPreferences` |
| `/summary` | `Summary` |

```tsx
import { createBrowserRouter } from "react-router";
import FormLayout from "./components/FormLayout";
import StepPersonalInfo from "./components/StepPersonalInfo";
// ... importera resten

const router = createBrowserRouter([
  {
    element: <FormLayout />,
    children: [
      { path: "/", element: <StepPersonalInfo /> },
      // TODO: lägg till resten av stegen
    ],
  },
]);

export default router;
```

### 1.3 Uppdatera main.tsx

Lägg till importerna och ersätt placeholder-texten med `RouterProvider`:

```tsx
import { RouterProvider } from "react-router/dom";
import router from "./router";

// ...
<RouterProvider router={router} />
```

### 1.4 Uppdatera FormLayout med Outlet

`FormLayout` använder just nu `children` för att rendera sitt innehåll. Lägg till `Outlet` från `react-router` så att child-routes renderas automatiskt:

```tsx
import { Outlet } from "react-router";

// Ersätt {children} med <Outlet /> i JSX:en
```

### 1.5 Navigera mellan stegen

Avkommentera TODO-raderna i varje steg-komponent. Lägg till `useNavigate` och koppla knapparna:

```tsx
import { useNavigate } from "react-router";

const navigate = useNavigate();

// Avkommentera onClick på knapparna, t.ex:
onClick={() => navigate("/address")}
```

### 1.6 Uppdatera currentStep dynamiskt

Just nu står `currentStep = 1` hårdkodat i `FormLayout`. Avkommentera `stepMap` och lägg till `useLocation` för att beräkna currentStep från URL:en. Vi använder `useLocation` (inte `useParams`) eftersom vi har fasta sökvägar utan parametrar.

```tsx
import { Outlet, useLocation } from "react-router";

const location = useLocation();

const stepMap: Record<string, number> = {
  "/": 1,
  "/address": 2,
  "/preferences": 3,
  "/summary": 4,
};

const currentStep = stepMap[location.pathname] || 1;
```

**Testa:** Klicka dig igenom alla steg. URL:en ska ändras och progress-baren ska uppdateras.

---

## Del 2: useContext

Just nu har varje steg sin egen lokala state. Data försvinner när du navigerar mellan stegen. Vi löser det med Context.

### 2.1 Skapa context-filen

Skapa `src/context/FormContext.tsx` med:

1. Ett context-objekt med `createContext`
2. En provider-komponent som håller state (`useState`)
3. En custom hook (`useFormContext`) som gör det enkelt att använda

```tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { initialFormData } from "../types/FormData";
import type { FormData } from "../types/FormData";

interface FormContextType {
  formData: FormData;
  updateFormData: (fields: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | null>(null);

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

// Custom hook för att förenkla användning av useContext i komponenterna
export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext måste användas inom FormProvider");
  }
  return context;
}
```

### 2.2 Wrappa routern med FormProvider

I `main.tsx` — lägg till `FormProvider` runt `RouterProvider`:

```tsx
import { FormProvider } from "./context/FormContext";

// ...
<FormProvider>
  <RouterProvider router={router} />
</FormProvider>
```

### 2.3 Använd context i steg-komponenterna

Avkommentera TODO-raderna i varje steg-komponent. Lägg till `useFormContext` och koppla inputs:

```tsx
import { useFormContext } from "../context/FormContext";

const { formData, updateFormData } = useFormContext();

// Avkommentera value och onChange på inputs, t.ex:
value={formData.firstName}
onChange={(e) => updateFormData({ firstName: e.target.value })}
```

Gör samma sak i `StepAddress`, `StepPreferences` och `Summary`.

**Testa:** Fyll i data i steg 1, gå till steg 2, gå tillbaka — din data ska finnas kvar.

## Filer du INTE ska ändra

- `src/components/ProgressBar.tsx` — visuell stegindikator
- `src/types/FormData.ts` — typer och initialdata

## Filer du SKA ändra

- `src/main.tsx` — lägg till RouterProvider och FormProvider
- `src/router.tsx` — skapa denna fil med routes
- `src/components/FormLayout.tsx` — lägg till Outlet och useLocation
- `src/components/StepPersonalInfo.tsx` — lägg till context + navigering
- `src/components/StepAddress.tsx` — lägg till context + navigering
- `src/components/StepPreferences.tsx` — lägg till context + navigering
- `src/components/Summary.tsx` — lägg till context + navigering
- `src/context/FormContext.tsx` — skapa denna fil (del 2)

---
