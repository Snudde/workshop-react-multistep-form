// TODO: Använd dig av useFormContext för att hämta all FormData

import useFormContext from "../hooks/useFormContext";
// TODO: Använde dig av useNavigate för programmiskt navigation
import { useNavigate } from "react-router";


const languageLabels: Record<string, string> = {
  sv: "Svenska",
  en: "Engelska",
  no: "Norska",
  da: "Danska",
  fi: "Finska",
};

function Summary() {
 
  const {formData} = useFormContext();
  let navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Sammanfattning</h2>

      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Personlig information
          </h3>
          <p>{formData.firstName} {formData.lastName}</p>
          
          <p>{formData.email}</p>
        </div>

        <hr className="border-gray-200" />

        <div>
          <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Adress
          </h3>
          <p>{formData.street}</p>
          <p>{formData.zipCode} {formData.city}</p>
        </div>

        <hr className="border-gray-200" />

        <div>
          <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Preferenser
          </h3>
          <p>Nyhetsbrev: { formData.newsletter ? "tack" : "tack ändå" } </p>
          <p>Tema: { formData.darkMode ? "dark" : "light" } </p>
          <p>Språk: {languageLabels[formData.language]} </p>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={() => navigate("/preferences")}
          className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-50 transition font-medium cursor-pointer"
        >
          Tillbaka
        </button>
        <button
          // TODO: onClick för att hantera inskickning
          onClick={() => navigate("/thankyou")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium cursor-pointer"
        >
          Skicka
        </button>
      </div>
    </div>
  );
}

export default Summary;
