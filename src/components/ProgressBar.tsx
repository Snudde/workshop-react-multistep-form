interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ["Personligt", "Adress", "Preferenser", "Sammanfattning"];

function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <div key={step} className="flex items-center flex-1 last:flex-0">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors ${
                  isCompleted
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : isActive
                      ? "border-indigo-600 text-indigo-600 bg-white"
                      : "border-gray-300 text-gray-400 bg-white"
                }`}
              >
                {isCompleted ? "✓" : step}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  isActive
                    ? "text-indigo-600"
                    : isCompleted
                      ? "text-indigo-600"
                      : "text-gray-400"
                }`}
              >
                {stepLabels[i]}
              </span>
            </div>
            {step < totalSteps && (
              <div
                className={`flex-1 h-0.5 mx-2 mb-6 ${
                  isCompleted ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
