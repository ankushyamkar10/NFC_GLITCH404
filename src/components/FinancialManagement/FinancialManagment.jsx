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

  return (
    <div className="flex justify-start flex-col gap-4 text-lg my-4 mx-8">
      <div className="text-3xl my-4 font-semibold ">Budget Management</div>
      <div className="border border-gray-400 p-4 rounded-md">
        <div className="my-2 text-start">
          Salary :
          <input
            name="salary"
            type="number"
            min={0}
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
              className="flex mt-4 justify-start items-center gap-2"
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
              <div className="mb-4 -mt-4 text-start">
                Taxe Amount Paid :
                <input
                  name="taxesAmount"
                  type="number"
                  min={0}
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
              <div className="mb-4 -mt-4 text-start">
                Insuarance Amount Paid :
                <input
                  name="insuaranceAmount"
                  type="number"
                  min={0}
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
              <div className="mb-4 -mt-4 text-start">
                Loan Amount Paid :
                <input
                  name="loanInterestAmount"
                  type="number"
                  min={0}
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
              <div className="mb-4 -mt-4 text-start">
                Dinner Amount Paid :
                <input
                  name="dinnerAmount"
                  type="number"
                  min={0}
                  value={dinnerAmount || ""}
                  className="border-b border-black outline-none px-4 ml-2"
                  onChange={(e) => {
                    setManagementData((prev) => ({
                      ...prev,
                      [e.target.name]: Number(e.target.value),
                      totalVal:
                        totalVal + dinnerAmount - Number(e.target.value),
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
              <div className="mb-4 -mt-4 text-start">
                Lunch Amount Paid :
                <input
                  name="lunchAmount"
                  type="number"
                  min={0}
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
          <div className="my-2 text-start">
            Others :
            <input
              type="number"
              min={0}
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
      </div>

      <div className="font-bold text-xl mt-8">
        Amount Remaining : {totalVal}
      </div>

      {salary !== 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4 relative my-8">
          <FinancialCardWrapper title="SIP" index="1">
            <div>Rate of Interest : 6.5%</div>
            <div>Duration : 1yr</div>
            <div>Interest Earned : {(6.5 * totalVal * 1) / 100}</div>
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
          <FinancialCardWrapper title="Fixed Deposits" index="2">
            <div>Rate of Interest : 6.5%</div>
            <div>Duration : 1yr</div>
            <div> Interest Earned :{(6.5 * totalVal * 1) / 100}</div>
            <button className="px-4 py-2 text-xs bg-blue-400 rounded-lg mx-auto mt-2">
              Get Started
            </button>
          </FinancialCardWrapper>
          <FinancialCardWrapper title="Treasury Bills" index="3">
            <div>Rate of Interest : 6.5%</div>
            <div>Duration : 1yr</div>
            <div>Interest Earned : {(6.5 * totalVal * 1) / 100}</div>
            <button className="px-4 py-2 text-xs bg-blue-400 rounded-lg mx-auto mt-2">
              Get Started
            </button>
          </FinancialCardWrapper>
          <FinancialCardWrapper title="Government Bond" index="4">
            <div>Rate of Interest : 6.5%</div>
            <div>Duration : 1yr</div>
            <div> Interest Earned :{(6.5 * totalVal * 1) / 100}</div>
            <button className="px-4 py-2 text-xs bg-blue-400 rounded-lg mx-auto mt-2">
              Get Started
            </button>
          </FinancialCardWrapper>
        </div>
      )}
    </div>
  );
};

export default FinancialManagment;
