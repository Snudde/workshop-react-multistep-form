// TODO: importera Outlet från "react-router"
import { Outlet } from "react-router";
// TODO: importera useLocation från "react-router"
import { useLocation } from "react-router";

import ProgressBar from "./ProgressBar";

// TODO: använd useLocation och stepMap för att beräkna currentStep dynamiskt
const stepMap: Record<string, number> = {
   "/": 1,
   "/address": 2,
   "/preferences": 3,
   "/summary": 4,
 };

// TODO: ta bort children-propen och använd <Outlet /> istället
function FormLayout() {

  // const currentStep = 1; // TODO: Ta bort denna hårdkodning  och använd useLocation istället

  // TODO: const location = useLocation();
  const location = useLocation();
  // TODO: const currentStep = stepMap[location.pathname] || 1;
  const currentStep = stepMap[location.pathname] || 1;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Registrering
        </h1>
        <ProgressBar currentStep={currentStep} totalSteps={4} />
        {<Outlet />}
        
      </div>
    </div>
  );
}

export default FormLayout;
