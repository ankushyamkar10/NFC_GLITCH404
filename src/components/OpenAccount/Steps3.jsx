import { ArrowBackSharp } from "@mui/icons-material";
import React from "react";

const Steps3 = ({
  setOTP,
  setShowInput,
  setShowVerfiyButton,
  otp,
  showInput,
  setFormData,
  phonenum,
  setSteps,
}) => {
  const handleInput = (e) => {
    const target = e.target;
    const val = target.value;

    if (isNaN(val)) {
      target.value = "";
      return;
    }

    if (val != "") {
      setOTP((prev) => ({ ...prev, [target.name]: Number(target.value) }));
      const next = target.nextElementSibling;
      if (next) {
        next.focus();
      }
    }
  };

  const handleKeyUp = (e) => {
    const target = e.target;
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
      setOTP((prev) => ({ ...prev, [target.name]: undefined }));
      target.value = "";
      const prev = target.previousElementSibling;
      if (prev) {
        prev.focus();
      }
      return;
    }
  };

  const otps =
    otp.a === undefined ||
    otp.b == undefined ||
    otp.c === undefined ||
    otp.d == undefined;

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    alert("Account Opened");
    window.location.href = "/";
  };

  return (
    <div>
      <div
        className="rounded-full w-fit bg-blue-400 p-4"
        onClick={() => setSteps((...prev) => prev - 1)}
      >
        <ArrowBackSharp />
      </div>
      <div className="mx-auto my-4 text-xl font-semibold">eKYC</div>
      <div className="flex flex-col items-start gap-2 my-4 text-lg">
        <div>Enter your phone number :</div>
        <div>
          <input
            required
            name="phonenum"
            type="tel"
            id="phone"
            minLength={10}
            maxLength={10}
            value={phonenum}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="9999888812"
            className=" outline-none rounded-lg w-full px-4 py-2 border border-gray-500 shadow-slate-600  "
          />
        </div>

        {showInput && (
          <div className="flex items-center justify-center my-4 gap-2">
            <div>Enter your OTP :</div>
            <div id="inputs" className="inputs ml-4">
              <input
                required
                className="input"
                type="text"
                inputMode="numeric"
                name="a"
                maxLength="1"
                onInput={handleInput}
                onKeyUp={handleKeyUp}
              />
              <input
                required
                className="input"
                type="text"
                name="b"
                inputMode="numeric"
                maxLength="1"
                onInput={handleInput}
                onKeyUp={handleKeyUp}
              />
              <input
                required
                className="input"
                type="text"
                name="c"
                inputMode="numeric"
                maxLength="1"
                onInput={handleInput}
                onKeyUp={handleKeyUp}
              />
              <input
                required
                className="input"
                type="text"
                name="d"
                inputMode="numeric"
                maxLength="1"
                onInput={(e) => {
                  handleInput(e);
                  setShowVerfiyButton(true);
                }}
                onBlur={() => setShowVerfiyButton(false)}
                onKeyUp={handleKeyUp}
              />
            </div>
          </div>
        )}
        <div className="mx-auto flex gap-4 items-center justify-center">
          <button
            className="px-8 py-2 bg-blue-400 rounded-lg mx-auto my-4"
            onClick={() => setShowInput(true)}
          >
            {showInput ? "Resend OTP" : "Get OTP"}
          </button>
          {!otps && (
            <button
              className="px-8 py-2 bg-blue-400 rounded-lg mx-auto my-4"
              onClick={handleSubmitOTP}
            >
              Verify
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Steps3;
