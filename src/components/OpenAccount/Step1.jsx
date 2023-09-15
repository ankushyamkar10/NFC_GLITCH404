import React from "react";

const Step1 = ({ setSteps, setFormData, accType }) => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="text-3xl text-left flex-1">Type </div>
        <button
          className={`bg-${
            accType === "Savings" ? "blue" : "gray"
          }-400 px-4 py-2 rounded-lg `}
          onClick={() => {
            setFormData((prev) => ({ ...prev, accType: "Savings" }));
          }}
        >
          Savings
        </button>
        <button
          className={` bg-${
            accType === "Current" ? "blue" : "gray"
          }-400 px-4 py-2 rounded-lg`}
          onClick={() => {
            setFormData((prev) => ({ ...prev, accType: "Current" }));
          }}
        >
          Current
        </button>
      </div>
      <button
        className="bg-blue-400 px-4 py-2 rounded-lg w-full my-8"
        onClick={() => setSteps(2)}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
