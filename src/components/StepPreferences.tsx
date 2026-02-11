// TODO: Använd dig av useFormContext för att uppdatera FormData
// TODO: Använde dig av useNavigate för programmiskt navigation


function StepPreferences() {


  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Preferenser</h2>

      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            // TODO: checked={formData.newsletter}
            // TODO: onChange={(e) => updateFormData({ newsletter: e.target.checked })}
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <span className="text-sm text-gray-700">
            Jag vill prenumerera på nyhetsbrevet
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            // TODO: checked={formData.darkMode}
            // TODO: onChange={(e) => updateFormData({ darkMode: e.target.checked })}
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <span className="text-sm text-gray-700">Aktivera mörkt läge</span>
        </label>
      </div>

      <div>
        <label
          htmlFor="language"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Föredraget språk
        </label>
        <select
          id="language"
          // TODO: value={formData.language}
          // TODO: onChange={(e) => updateFormData({ language: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
        >
          <option value="sv">Svenska</option>
          <option value="en">Engelska</option>
          <option value="no">Norska</option>
          <option value="da">Danska</option>
          <option value="fi">Finska</option>
        </select>
      </div>

      <div className="flex justify-between pt-4">
        <button
          // TODO: onClick={() => navigate("/address")}
          className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-50 transition font-medium cursor-pointer"
        >
          Tillbaka
        </button>
        <button
          // TODO: onClick={() => navigate("/summary")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium cursor-pointer"
        >
          Nästa
        </button>
      </div>
    </div>
  );
}

export default StepPreferences;
