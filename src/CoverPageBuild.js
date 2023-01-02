import React, { useState } from "react";
import data from "./Resume";
import QR from "./Images/Portfolio.jpg";
import Sign from "./Images/Sign.jpg";
import { FaChevronDown, FaAngleRight, FaAngleDown } from "react-icons/fa";

export default function CoverPageBuild() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");

  function Name() {
    setName(document.getElementById("name").value);
  }

  function Company() {
    setCompany(document.getElementById("company").value);
  }

  function Job() {
    setJob(document.getElementById("job").value);
  }
  return (
    <div className="CoverGrid pt-12">
      {/*  */}
      <div className="col-span-3 bg-cyan-900 rounded-br-3xl text-white text-sm pl-12 pt-6">Cover Letter</div>
      <div className="col-span-1"></div>
      {/*  */}
      <div className="col-span-3">
        <h1 className="text-4xl px-12 pt-6 uppercase font-extrabold text-cyan-800">{data.Name}</h1>
        <div className="text-2lx px-12">
          <input type={"text"} id="job" placeholder="Job" onChange={Job} />
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
              <div className="pl-8 opacity-80">{item.Data}</div>
            </div>
          );
        })}
      </div>
      {/* Company */}
      <div className="b-box col-span-3 row-span-3 p-4 flex flex-col">
        <div className="flex flex-row justify-start font-bold">
          <FaAngleDown className="mt-1 opacity-30" />
          <input type={"text"} id="name" placeholder="Name" onChange={Name} />
        </div>
        <div className="flex flex-row justify-start pl-4 pt-2">
          &#183;
          <input type={"text"} className="px-2" defaultValue="Hiring Manager" />
        </div>
        <div className="flex flex-row justify-start pl-4 pt-2">
          &#183;
          <input type={"text"} id="company" className="px-2" placeholder="Company" onChange={Company} />
        </div>
        <div className="flex flex-row justify-start pl-4 pt-2">
          &#183;
          <input type={"text"} className="px-2" placeholder="Address" />
        </div>
        <div className="flex flex-row justify-start pl-4 pt-2">
          &#183;
          <input type={"text"} className="px-2" placeholder="City State Zip" />
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
        Dear {name}, <br />
        <div className="indent-8">
          This is regarding {company}'s open position for {job}. I am a highly focused, motivated and skilled {job} with an ability to problem solve quickly and efficiently. I hold two bachelors degrees. A Computer Science Degree where I focused on Data Structures, and optimization from Dakota
          Status University. As well as Business Degree tailored to financial and team management from the University of Charleston.
        </div>
        <br />
        <div className="indent-8">
          I understand the importance building and managing Data Structures, and feel that with my knowledge and motivation I can quickly become a valued member of the {company} team. <br /> <br />
        </div>
        <div className="indent-64">Thank you for your time and consideration</div>
        <div className="flex flex-row justify-end pr-24 pt-4">
          <img src={Sign} className="w-64" alt="Signature" />
        </div>
        <div className="indent-64">Travis Heidelberger</div>
      </div>
      {/*  */}
      {/* <div className="col-span-1 row-span-2"></div> */}
      <div className="col-span-3 bg-cyan-900 rounded-tl-3xl px-4 pb-3 flex justify-end items-end text-xs text-white"> ./ Cover Letter Created with React using Tailwind by Travis Heidelberger</div>
    </div>
  );
}
