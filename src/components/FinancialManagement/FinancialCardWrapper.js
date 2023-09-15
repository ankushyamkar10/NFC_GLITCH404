import React, { useState } from "react";

const FinancialCardWrapper = ({ title, children, index }) => {
  return (
    <div className="card">
      <div className=" w-[11rem] md:w-[11rem] h-[13rem] md:-mt-[0%] text-center  py-4 px-2 rounded-md border border-gray-400 content">
        <div
          className={`text-lg md:text-md back ${
            index === undefined && "mb-[45%] md:mb-[0%]"
          } `}
        >
          {children}
        </div>
        <div
          className={`text-xl front ${
            index === undefined && "mt-[50%] md:-mt-[70%]"
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default FinancialCardWrapper;
