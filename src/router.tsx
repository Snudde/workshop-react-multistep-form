// TODO: importera createBrowserRouter från "react-router"
import { createBrowserRouter } from "react-router";
// TODO: importera FormLayout från "./components/FormLayout"
import FormLayout from "./components/FormLayout";
// TODO: importera StepPersonalInfo från "./components/StepPersonalInfo"
import StepPersonalInfo from "./components/StepPersonalInfo";
// TODO: importera StepAddress från "./components/StepAddress"
import StepAddress from "./components/StepAddress"; 
// TODO: importera StepPreferences från "./components/StepPreferences"
import StepPreferences from "./components/StepPreferences";
// TODO: importera Summary från "./components/Summary"
import Summary from "./components/Summary";
import ThankYouStep from "./components/ThankYouStep";

const router = createBrowserRouter([
  {
    element: <FormLayout />,
    children: [
      { path: "/", element: <StepPersonalInfo /> },
      { path: "/address", element: <StepAddress />},
      { path: "/preferences", element: <StepPreferences />},
      { path: "/summary", element: <Summary />},
    ],
  },

   {
    path: "/thankyou",
    element: <ThankYouStep/>
  }
]);

export default router;