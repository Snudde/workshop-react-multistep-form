import { useNavigate } from "react-router";

function ThankYouStep() {

    let navigate = useNavigate();
  return (
    <div className="space-y-4 flex items-center justify-center flex-col h-dvh bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="bg-green-100 flex items-center flex-col justify-center border border-green-600 p-6 rounded-lg space-y-4">
      <h2 className="text-lg font-semibold text-gray-700 text-center">Thank you</h2>
      <button
          
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium cursor-pointer"
        >
          Tillbaka till startsidan
        </button>
        </div>
    </div>
  );
}

export default ThankYouStep;