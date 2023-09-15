import React, { useState } from "react";
import Step1 from "./Step1";
import Steps3 from "./Steps3";
import Step2 from "./Step2";

const OpenAccount = () => {
  const [steps, setSteps] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [showVerfiyButton, setShowVerfiyButton] = useState(false);
  const [otp, setOTP] = useState({
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
  });

  const [formData, setFormData] = useState({
    accType: "",
    fullname: "",
    emailId: "",
    address: "",
    phone: 0 || "",
    image: "",
  });

  return (
    <div>
      <div className="text-3xl my-4 font-semibold"> Open your Account</div>
      <div className="my-8 font-semibold text-lg">Step {steps}</div>
      <div className="mx-4">
        {steps === 1 && (
          <Step1
            setSteps={setSteps}
            setFormData={setFormData}
            accType={formData.accType}
          />
        )}
        {steps === 2 && (
          <Step2
            setFormData={setFormData}
            setSteps={setSteps}
            formData={formData}
          />
        )}
        {steps === 3 && (
          <Steps3
            setOTP={setOTP}
            setShowInput={setShowInput}
            setShowVerfiyButton={setShowVerfiyButton}
            otp={otp}
            showInput={showInput}
            phone={formData.phone}
            setSteps={setSteps}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
};

export default OpenAccount;
