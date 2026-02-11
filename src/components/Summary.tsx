// TODO: Använd dig av useFormContext för att hämta all FormData
// TODO: Använde dig av useNavigate för programmiskt navigation


const languageLabels: Record<string, string> = {
  sv: "Svenska",
  en: "Engelska",
  no: "Norska",
  da: "Danska",
  fi: "Finska",
};

function Summary() {
 

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Sammanfattning</h2>

      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Personlig information
          </h3>
          {/* TODO: <p>{formData.firstName} {formData.lastName}</p> */}
          {/* TODO: <p>{formData.email}</p> */}
        </div>

        <hr className="border-gray-200" />

        <div>
          <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Adress
          </h3>
          {/* TODO: <p>{formData.street}</p> */}
          {/* TODO: <p>{formData.zipCode} {formData.city}</p> */}
        </div>

        <hr className="border-gray-200" />

        <div>
          <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Preferenser
          </h3>
          {/* TODO: visa formData.newsletter, formData.darkMode, formData.language */}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          // TODO: onClick={() => navigate("/preferences")}
          className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-50 transition font-medium cursor-pointer"
        >
          Tillbaka
        </button>
        <button
          // TODO: onClick för att hantera inskickning
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium cursor-pointer"
        >
          Skicka
        </button>
      </div>
    </div>
  );
}

export default Summary;
