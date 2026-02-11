// TODO: Använd dig av useFormContext för att uppdatera FormData
// TODO: Använde dig av useNavigate för programmiskt navigation


function StepPersonalInfo() {


  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">
        Personlig information
      </h2>

      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Förnamn
        </label>
        <input
          id="firstName"
          type="text"
          // TODO: value={formData.firstName}
          // TODO: onChange={(e) => updateFormData({ firstName: e.target.value })}
          placeholder="Ange ditt förnamn"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Efternamn
        </label>
        <input
          id="lastName"
          type="text"
          // TODO: value={formData.lastName}
          // TODO: onChange={(e) => updateFormData({ lastName: e.target.value })}
          placeholder="Ange ditt efternamn"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          E-post
        </label>
        <input
          id="email"
          type="email"
          // TODO: value={formData.email}
          // TODO: onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="namn@exempel.se"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          // TODO: onClick={() => navigate("/address")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium cursor-pointer"
        >
          Nästa
        </button>
      </div>
    </div>
  );
}

export default StepPersonalInfo;
