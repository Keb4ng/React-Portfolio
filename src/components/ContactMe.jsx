import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Reveal } from "../customHooks/Reveal";

const ContactMe = () => {
  const [validation, setValidation] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidation(true);
  };
  return (
    <Reveal>
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row-reverse justify-evenly">
        <div
          id="contact"
          className="w-full max-w-[500px] bg-slate-900 sm:mx-auto md:mx-0 relative h-auto text-white px-5 py-3">
          <h1 className="text-3xl my-5">
            Contact <span className="text-yellow-500">Me</span>
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
            <div>
              <input
                className="outline-none w-full h-auto px-5 py-5 text-slate-900"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="outline-none w-full h-auto px-5 py-5 text-slate-900"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="w-auto h-full col-span-2 relative">
              <textarea
                className="w-full h-auto min-h-[200px] p-5 text-slate-900 outline-none"
                placeholder="Message..."
              />
              <button className="absolute bottom-5 right-5 z-10 text-slate-900 cursor-pointer hover:opacity-50 duration-300">
                <FaPaperPlane size={25} />
              </button>
            </div>
            {validation ? (
              <p className="w-full col-span-2 text-center h-auto px-2 py-2 border-2 border-green-600  text-green-600">
                Message Sent!
              </p>
            ) : (
              ""
            )}
          </form>
        </div>
        <div className="flex flex-col text-white justify-center items-center px-5 py-10 mb:py-0">
          <div>
            <h1 className="text-xl mb-5">
              You can also Contact me on these info's:
            </h1>
            <p className="flex items-center gap-3">
              <FaPhoneSquareAlt size={25} />
              Contact: 09174626808
            </p>
            <p className="flex items-center gap-3">
              <MdEmail size={25} />
              Email: jontrinidad18@gmail.com
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ContactMe;
