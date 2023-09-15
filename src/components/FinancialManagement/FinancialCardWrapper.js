import React, { useState } from "react";

const FinancialCardWrapper = ({ title, children }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flex w-[10.5rem] h-[11rem] items-center justify-center py-4 px-2 rounded-md border border-gray-400"
      onClick={() => setFlipped(!flipped)}
    >
      {flipped ? (
        <span className="text-md">{children}</span>
      ) : (
        <span className="text-xl">{title}</span>
      )}
    </div>
  );
};

export default FinancialCardWrapper;
