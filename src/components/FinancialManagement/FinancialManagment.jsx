import React, { useEffect, useState } from "react";
import FinancialCardWrapper from "./FinancialCardWrapper";

const FinancialManagment = () => {
  const [managementData, setManagementData] = useState({
    salary: 0,
    others: 0,
    taxes: false,
    taxesAmount: 0,
    insuarance: false,
    insuaranceAmount: 0,
    loanInterest: false,
    loanInterestAmount: 0,
    dinner: false,
    dinnerAmount: 0,
    lunch: false,
    lunchAmount: 0,
    totalVal: 0,
  });

  const {
    salary,
    taxes,
    insuarance,
    loanInterest,
    others,
    dinner,
    lunch,
    taxesAmount,
    insuaranceAmount,
    loanInterestAmount,
    dinnerAmount,
    lunchAmount,
    totalVal,
  } = managementData;

  const handleChange = (e) => {
    if (managementData[e.target.name] === true) {
      setManagementData((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked,
        [e.target.name + "Amount"]: 0,
        totalVal: totalVal + managementData[[e.target.name + "Amount"]],
      }));
    } else
      setManagementData((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked,
      }));
  };

  console.log(managementData);

  return (
    <div className="flex justify-start flex-col gap-4">
      <div className="my-2 text-start">
        Salary :
        <input
          name="salary"
          type="number"
          value={salary || ""}
          className="border-b border-black outline-none px-4 ml-2"
          onChange={(e) => {
            setManagementData((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
              totalVal: totalVal - salary + Number(e.target.value),
            }));
          }}
        />
      </div>
      <div>
        <form>
          <label
            htmlFor="taxes"
            className="flex justify-start items-center gap-2"
          >
            <input
              type="checkbox"
              id="taxes"
              name="taxes"
              value={taxes}
              className="w-4 h-4"
              onChange={handleChange}
            />
            Taxes
          </label>
          <br />
          {taxes && (
            <div className="mb-2 text-start">
              Taxe Amount Paid :
              <input
                name="taxesAmount"
                type="number"
                value={taxesAmount || ""}
                className="border-b border-black outline-none px-4 ml-2"
                onChange={(e) => {
                  setManagementData((prev) => ({
                    ...prev,
                    [e.target.name]: Number(e.target.value),
                    totalVal: totalVal + taxesAmount - Number(e.target.value),
                  }));
                }}
              />
            </div>
          )}

          <label
            htmlFor="insuarance"
            className="flex justify-start items-centerms-center  gap-2"
          >
            <input
              type="checkbox"
              id="insuarance"
              name="insuarance"
              value={insuarance}
              className="w-4 h-4"
              onChange={handleChange}
            />
            Insurance
          </label>
          <br />
          {insuarance && (
            <div className="mb-2 text-start">
              Insuarance Amount Paid :
              <input
                name="insuaranceAmount"
                type="number"
                value={insuaranceAmount || ""}
                className="border-b border-black outline-none px-4 ml-2"
                onChange={(e) => {
                  setManagementData((prev) => ({
                    ...prev,
                    [e.target.name]: Number(e.target.value),
                    totalVal:
                      totalVal + insuaranceAmount - Number(e.target.value),
                  }));
                }}
              />
            </div>
          )}

          <label
            htmlFor="loanInterest"
            className="flex justify-start items-center gap-2"
          >
            <input
              type="checkbox"
              id="loanInterest"
              name="loanInterest"
              value={loanInterest}
              className="w-4 h-4"
              onChange={handleChange}
            />
            Loan Interest
          </label>
          <br />
          {loanInterest && (
            <div className="mb-2 text-start">
              Taxe Amount Paid :
              <input
                name="loanInterestAmount"
                type="number"
                value={loanInterestAmount || ""}
                className="border-b border-black outline-none px-4 ml-2"
                onChange={(e) => {
                  setManagementData((prev) => ({
                    ...prev,
                    [e.target.name]: Number(e.target.value),
                    totalVal:
                      totalVal + loanInterestAmount - Number(e.target.value),
                  }));
                }}
              />
            </div>
          )}
          <label
            htmlFor="dinner"
            className="flex justify-start items-center gap-2"
          >
            <input
              type="checkbox"
              id="dinner"
              name="dinner"
              value={dinner}
              className="w-4 h-4"
              onChange={handleChange}
            />
            Dinner
          </label>
          <br />
          {dinner && (
            <div className="mb-2 text-start">
              Taxe Amount Paid :
              <input
                name="dinnerAmount"
                type="number"
                value={dinnerAmount || ""}
                className="border-b border-black outline-none px-4 ml-2"
                onChange={(e) => {
                  setManagementData((prev) => ({
                    ...prev,
                    [e.target.name]: Number(e.target.value),
                    totalVal: totalVal + dinnerAmount - Number(e.target.value),
                  }));
                }}
              />
            </div>
          )}
          <label
            htmlFor="lunch"
            className="flex justify-start items-center gap-2"
          >
            <input
              type="checkbox"
              id="lunch"
              name="lunch"
              value={lunch}
              className="w-4 h-4"
              onChange={handleChange}
            />
            Lunch
          </label>
          <br />
          {lunch && (
            <div className="mb-2 text-start">
              Taxe Amount Paid :
              <input
                name="lunchAmount"
                type="number"
                value={lunchAmount || ""}
                className="border-b border-black outline-none px-4 ml-2"
                onChange={(e) => {
                  setManagementData((prev) => ({
                    ...prev,
                    [e.target.name]: Number(e.target.value),
                    totalVal: totalVal + lunchAmount - Number(e.target.value),
                  }));
                }}
              />
            </div>
          )}
        </form>
        <div className="mb-2 text-start">
          Others :
          <input
            type="number"
            name="others"
            value={others || ""}
            className="border-b border-black outline-none px-4 ml-2"
            onChange={(e) =>
              setManagementData((prev) => ({
                ...prev,
                [e.target.name]: Number(e.target.value),
                totalVal: totalVal + others - Number(e.target.value),
              }))
            }
          />
        </div>
      </div>

      <div className="font-bold text-xl">Amount Remaining : {totalVal}</div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <FinancialCardWrapper title="Systematic Investment Plan">
          <div>Rate of Interest : 6.5%</div>
          <div>Duration : 1yr</div>
          <div>Interest Earned : {(6.5 * totalVal * 1) / 100}</div>
          <button
            className="px-4 py-2 text-xs bg-blue-400 rounded-lg mx-auto mt-2"
            onClick={() =>
              window.location.assign(
                "https://infinity.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ICI&CTA_FLAG=DEPOSIT&af_xp=social&source_caller=ui&pid=RIB&utm_source=website&shortlink=FDIndex&utm_medium=onelink&utm_campaign=fixeddeposit&deep_link_value=openfdNew&c=FD_RIBF"
              )
            }
          >
            Get Started
          </button>
        </FinancialCardWrapper>
        <FinancialCardWrapper title="Fixed Deposits">
          <div>Rate of Interest : 6.5%</div>
          <div>Duration : 1yr</div>
          <div> Interest Earned :{(6.5 * totalVal * 1) / 100}</div>
          <button className="px-4 py-2 text-xs bg-blue-400 rounded-lg mx-auto mt-2">
            Get Started
          </button>
        </FinancialCardWrapper>
        <FinancialCardWrapper title="Treasury Bills">
          <div>Rate of Interest : 6.5%</div>
          <div>Duration : 1yr</div>
          <div>Interest Earned : {(6.5 * totalVal * 1) / 100}</div>
          <button className="px-4 py-2 text-xs bg-blue-400 rounded-lg mx-auto mt-2">
            Get Started
          </button>
        </FinancialCardWrapper>
        <FinancialCardWrapper title="Government Bond">
          <div>Rate of Interest : 6.5%</div>
          <div>Duration : 1yr</div>
          <div> Interest Earned :{(6.5 * totalVal * 1) / 100}</div>
          <button className="px-4 py-2 text-xs bg-blue-400 rounded-lg mx-auto mt-2">
            Get Started
          </button>
        </FinancialCardWrapper>
      </div>
    </div>
  );
};

export default FinancialManagment;
