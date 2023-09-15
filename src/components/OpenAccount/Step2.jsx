import React from "react";

const Step2 = ({ setFormData, setSteps, formData }) => {
  const { fullname, emailId, image, address } = formData;
  const handlesubmit = (e) => {
    e.preventDefault();
    setSteps(3);
  };
  return (
    <div>
      <div
        className="rounded-full w-fit bg-blue-400 px-3 py-4"
        onClick={() => setSteps((...prev) => prev - 1)}
      >
        back
      </div>
      <form className="flex flex-col w-full" onSubmit={handlesubmit}>
        <div className="px-4 py-6 flex items-center justify-center gap-4 ">
          <p className="font-semibold">Full Name</p>

          <input
            name="fullname"
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Enter fullname"
            className=" outline-none rounded-lg w-full px-4 py-2 border border-black shadow-slate-600  "
          />
        </div>

        <div className="px-4 py-6 flex items-center justify-center gap-4 ">
          <p className="font-semibold">Email Id</p>

          <input
            name="emailId"
            type="email"
            id="emailId"
            value={emailId}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Enter Email Id"
            className=" outline-none rounded-lg w-full px-4 py-2 border border-black shadow-slate-600  "
          />
        </div>

        <div className="px-4 py-6 flex items-center gap-4 ">
          <p className="font-semibold">Your Image</p>

          <input
            className=" outline-none rounded-lg px-4 py-2"
            type="file"
            value={image}
            name="image"
            id="image"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>

        <div className="px-4 py-6 flex justify-center items-center gap-4 ">
          <p className="font-semibold ">Address</p>

          <input
            name="address"
            id="address"
            value={address}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Enter address"
            className=" outline-none rounded-lg w-full px-4 py-2 border border-black shadow-slate-600  "
          ></input>
        </div>
        <button className="bg-blue-400 px-4 py-2 rounded-lg">Next</button>
      </form>
    </div>
  );
};

export default Step2;
