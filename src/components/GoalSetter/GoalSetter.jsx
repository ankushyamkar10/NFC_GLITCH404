import React, { useState } from "react";
import FinancialCardWrapper from "../FinancialManagement/FinancialCardWrapper";
import { CancelOutlined } from "@mui/icons-material";

const GoalSetter = () => {
  const [goalData, setGoalData] = useState({
    description: "Travelling",
    investableAmount: 0,
    duration: 0,
    goalAmount: 0,
  });
  const [showSuggestion, setSuggestions] = useState(false);

  const { description, investableAmount, duration, goalAmount } = goalData;
  const suggestiondata = [
    {
      id: 1,
      interest: 5.2,
      title: "Stocks",
      risk: "High",
    },
    {
      id: 2,
      interest: 3.8,
      title: "Bonds",
      risk: "Medium",
    },
    {
      id: 3,
      interest: 2.5,
      title: "Real Estate",
      risk: "Medium-High",
    },
    {
      id: 4,
      interest: 1.2,
      title: "Savings Account",
      risk: "Low",
    },
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const filteredSuggestion = shuffleArray(suggestiondata);

  const handleChange = (e) => {
    setGoalData((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handlePlanGoal = (e) => {
    e.preventDefault();
    setSuggestions(true);
  };

  console.log(description, duration, goalAmount, investableAmount);

  return (
    <div className="mx-4">
      <div className="text-3xl my-4 font-semibold">GoalSetter</div>
      <div>
        <form
          className="flex flex-col gap-4 justify-center my-4 text-[1rem]"
          onSubmit={handlePlanGoal}
        >
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="description" className="text-left">
              Description of Goal
            </label>
            <select
              name="description"
              id="description"
              className="w-[55vw] px-4 py-2 border border-gray-400 outline-none"
              onChange={(e) =>
                !showSuggestion &&
                setGoalData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              value={description}
            >
              <option value="Travelling" defaultValue="Travelling">
                Travelling
              </option>
              <option value="Car Loan">Car Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Education">Education</option>
            </select>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="investableAmount" className="text-left">
              Investable Amount
            </label>
            <input
              type="number"
              id="investableAmount"
              name="investableAmount"
              value={investableAmount || ""}
              className="w-[55vw] border border-gray-400 px-4 py-2 rounded-sm outline-none"
              onChange={!showSuggestion ? handleChange : null}
            />
          </div>
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="duration" className="text-left">
              Duration for Goal
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={duration || ""}
              className="w-[55vw] border border-gray-400 px-4 py-2 rounded-sm outline-none"
              onChange={!showSuggestion ? handleChange : null}
            />
          </div>
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="goalAmount" className="text-left">
              Goal Amount
            </label>
            <input
              type="text"
              id="goalAmount"
              name="goalAmount"
              value={goalAmount || ""}
              className="w-[55vw] border border-gray-400 px-4 py-2 rounded-sm outline-none"
              onChange={!showSuggestion ? handleChange : null}
            />
          </div>
          <div>
            <button className="w-full py-2 bg-blue-400 rounded-lg mx-auto my-4">
              Plan your Goal
            </button>
          </div>
        </form>
      </div>
      {showSuggestion && (
        <div
          className="rounded-full w-fit bg-blue-400 py-3 px-3 my-4"
          onClick={() => setSuggestions(false)}
        >
          <CancelOutlined />
        </div>
      )}
      {showSuggestion && (
        <div className="flex flex-wrap items-center justify-center gap-4 my-8">
          {filteredSuggestion.map((investment) => {
            return (
              <FinancialCardWrapper
                title={investment.title + " investment for " + description}
                key={investment.id}
              >
                <div>Rate of Interest : {investment.roi}</div>
                <div>Duration : {duration}</div>
                <div>
                  Interest Earned :
                  {(investment.interest *
                    (goalAmount - investableAmount) *
                    duration) /
                    100}
                </div>
                <button
                  className="px-4 py-2 text-xs bg-blue-400 rounded-lg mx-auto mt-2"
                  onClick={() =>
                    window.open(
                      "https://infinity.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ICI&CTA_FLAG=DEPOSIT&af_xp=social&source_caller=ui&pid=RIB&utm_source=website&shortlink=FDIndex&utm_medium=onelink&utm_campaign=fixeddeposit&deep_link_value=openfdNew&c=FD_RIBF"
                    )
                  }
                >
                  Get Started
                </button>
              </FinancialCardWrapper>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GoalSetter;
