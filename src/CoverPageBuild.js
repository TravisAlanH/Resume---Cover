import React, { useState, useEffect } from "react";
import data from "./Resume";
import QR from "./Images/Portfolio.jpg";
import Sign from "./Images/Sign.jpg";
import { FaChevronDown, FaAngleRight, FaAngleDown } from "react-icons/fa";

export default function CoverPageBuild() {
  const [name, setName] = useState("Talent Acquisition");
  const [company, setCompany] = useState("Your Company");
  const [job, setJob] = useState("Software Developer");

  function Name() {
    setName(document.getElementById("name").value);
  }

  function Company() {
    setCompany(document.getElementById("company").value);
  }

  function Job() {
    setJob(document.getElementById("job").value);
  }

  useEffect(() => {
    document.title = company + "_" + new Date().toLocaleDateString("en-us", { year: "numeric", month: "short" });
  }, [company]);

  return (
    <div>
      <div className="CoverGrid pt-8">
        {/*  */}
        <div className="col-span-3 bg-cyan-900 rounded-br-3xl text-white text-sm pl-12 pt-6">Cover Letter</div>
        <div className="col-span-1"></div>
        {/*  */}
        <div className="col-span-3">
          <h1 className="text-4xl px-12 pt-6 uppercase font-extrabold text-cyan-800">{data.Name}</h1>
          <div className="text-2lx px-12">
            <input type={"text"} id="job" placeholder="Job" className="w-full" onChange={Job} />
          </div>
        </div>
        <div className="col-span-1"></div>
        {/*  */}
        <div className="b-box col-span-1 px-8 pt-2 uppercase flex justify-start items-center text-xl font-extrabold text-cyan-800">
          Contact <FaChevronDown className="text-xl font-bold pl-2" />
        </div>
        <div className="col-span-3 p-4">{new Date().toLocaleDateString("en-us", { year: "numeric", month: "short" })}</div>
        {/*  */}
        <div className="col-span-1 row-span-1 flex flex-col justify-between py-4">
          {data.Contact.map((item, index) => {
            return (
              <div className="flex flex-col justify-start items-start pl-4" key={index}>
                <div className="text-lg font-bold flex flex-row">
                  <FaAngleRight className="mt-1 opacity-30" /> {item.Type}
                </div>
                <div className="pl-8 opacity-80 text-base">{item.Data}</div>
              </div>
            );
          })}
        </div>
        {/* Company */}
        <div className=" col-span-3 row-span-3 p-4 flex flex-col">
          <div className="flex flex-row justify-start font-bold">
            <FaAngleDown className="mt-1 opacity-30" />
            <input type={"text"} id="name" placeholder="Talent Acquisition" className="w-full text-base-mobile" onChange={Name} />
          </div>
          <div className="flex flex-row justify-start pl-4 pt-2">
            &#183;
            <input type={"text"} className="px-2 w-full text-base-mobile" defaultValue="Hiring Manager" />
          </div>
          <div className="flex flex-row justify-start pl-4 pt-2">
            &#183;
            <input type={"text"} id="company" className="px-2 w-full text-base-mobile" placeholder="Company" onChange={Company} />
          </div>
          <div className="flex flex-row justify-start pl-4 pt-2">
            &#183;
            <input type={"text"} className="px-2 w-full text-base-mobile" placeholder="Address" />
          </div>
          <div className="flex flex-row justify-start pl-4 pt-2">
            &#183;
            <input type={"text"} className="px-2 w-full text-base-mobile" placeholder="City State Zip" />
          </div>
        </div>
        {/*  */}
        <div className="col-span-1 row-span-5 flex flex-col justify-end">
          <div className="flex flex-row justify-center -translate-x-12 pb-8">
            <label className="-rotate-90 translate-x-16">Portfolio</label>
            <img src={QR} alt="QR" className="w-32 h-32 " />
          </div>
        </div>
        {/* Message */}
        <div className="col-span-3 row-span-2 p-4">
          Dear {name} or whom it May Concern, <br />
          <div className="indent-8 text-base">
            This is regarding {company} open position for {job}. I am a highly focused, motivated and a skilled {job} with an ability to problem solve quickly and efficiently. I hold two Bachelors Degrees. A Computer Science Degree where I focused on Data Structures, and optimization from Dakota
            State University. As well as Business Degree tailored to Financial and Team Management from the University of Charleston.
          </div>
          <br />
          <div className="indent-8 text-base">I understand the importance of building and managing Data Structures, and feel that with my knowledge and motivation I can quickly become a valued member of the {company} team. </div>
          <br />
          <div className="indent-64 text-base">Thank you for your time and consideration</div>
          <div className="pl-64 text-base">
            <img src={Sign} className="w-64" alt="Signature" />
            Travis Heidelberger
          </div>
        </div>

        {/* </div> */}

        {/*  */}
        {/* <div className="col-span-1 row-span-2"></div> */}
        <div className="col-span-3 bg-cyan-900 rounded-tl-3xl px-4 pb-3 flex justify-end items-end text-xs text-white"> ./ Cover Letter Created with React using Tailwind by Travis Heidelberger</div>
      </div>
    </div>
  );
}
