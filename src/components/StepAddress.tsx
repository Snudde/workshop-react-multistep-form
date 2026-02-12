// TODO: Använd dig av useFormContext för att uppdatera FormData
// TODO: Använde dig av useNavigate för programmiskt navigation

import { useNavigate } from "react-router";
import useFormContext from "../hooks/useFormContext";
  

function StepAddress() {
  const navigate = useNavigate()
  const {formData, updateFormData } = useFormContext()
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Adress</h2>

      <div>
        <label
          htmlFor="street"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Gatuadress
        </label>
        <input
          id="street"
          type="text"
          value={formData.street}
          onChange={(e) => updateFormData({ street: e.target.value })}
          placeholder="Ange din gatuadress"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Postnummer
          </label>
          <input
            id="zipCode"
            type="text"
            value={formData.zipCode}
            onChange={(e) => updateFormData({ zipCode: e.target.value })}
            placeholder="123 45"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Stad
          </label>
          <input
            id="city"
            type="text"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
            placeholder="Ange stad"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={() => navigate("/")}
          className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-50 transition font-medium cursor-pointer"
        >
          Tillbaka
        </button>
        <button
          onClick={() => navigate("/preferences")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium cursor-pointer"
        >
          Nästa
        </button>
      </div>
    </div>
  );
}

export default StepAddress;
