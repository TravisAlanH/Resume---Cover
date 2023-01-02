import React from "react";
import data from "./Resume";
import QR from "./Images/Portfolio.jpg";
import { FaChevronDown, FaAngleRight, FaAngleDown, FaQuoteLeft } from "react-icons/fa";

let GradPadding = ["1rem", "11.6rem"];

export default function ResumeBuild() {
  return (
    <div className="ResumeGrid pt-12">
      {/*  */}
      <div className="col-span-3 bg-cyan-900 rounded-br-3xl text-white text-sm pl-12 pt-6">Resume</div>
      <div className="col-span-1"></div>
      {/*  */}
      <div className="col-span-3">
        <h1 className="text-4xl px-12 pt-6 uppercase font-extrabold text-cyan-800">{data.Name}</h1>
        <div className="text-2lx px-12 text-base">{data.HomeQuote}</div>
      </div>
      <div className="col-span-1 p-2 flex flex-row items-center justify-start">
        <FaQuoteLeft className="text-8xl pb-16 mb-2 mr-2 text-cyan-800" />
        <div className="text-base">{data.AboutTextAlt}</div>
      </div>
      {/*   */}
      <div className="b-box col-span-1 px-8 pt-2 uppercase flex justify-start items-center text-xl font-extrabold text-cyan-800">
        Contact <FaChevronDown className="text-xl font-bold pl-2" />
      </div>
      <div className=" b-box col-span-3 px-8 pt-2 uppercase flex justify-start items-center text-xl font-extrabold text-cyan-800">
        Education <FaChevronDown className="text-xl font-bold pl-2" />
      </div>
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
      <div className="col-span-1 row-span-2">
        {data.Collage.map((item, index) => {
          return (
            <div className="pl-10 text-base" style={{ paddingTop: GradPadding[index] }} key={index}>
              {item.GradYear}
            </div>
          );
        })}
      </div>
      <div className="col-span-2 row-span-2">
        {data.Collage.map((item, index) => {
          return (
            <div className="flex flex-col pt-4 pl-4" key={index}>
              <div className=" text-lg font-bold flex flex-row">
                <FaAngleRight className="mt-1 opacity-30" />
                {item.Degree}
              </div>
              <div className="pl-8 flex flex-row text-base">
                <FaAngleDown className="mt-1 opacity-30" />
                {item.School}
              </div>
              <div className="pl-8">
                {item.Data.map((data, index) => {
                  return (
                    <p className="pl-8 pt-1" key={index}>
                      &#183; {data}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/*  */}
      <div className="b-box col-span-1 px-8 pt-2 uppercase flex justify-start items-center text-xl font-extrabold text-cyan-800">
        Skills <FaChevronDown className="text-xl font-bold pl-2" />
      </div>
      <div className="col-span-1 row-span-4">
        {" "}
        <div className="p-4 flex flex-col justify-between w-full h-full">
          {data.Skills.map((item, index) => {
            return (
              <p key={index} className="flex flex-row justify-start text-lg font-bold">
                <FaAngleRight className="mt-1 opacity-30" /> {item}
              </p>
            );
          })}
          {data.TalentSkills.map((item, index) => {
            return (
              <p key={index} className="flex flex-row justify-start text-lg font-bold">
                <FaAngleRight className="mt-1 opacity-30" /> {item}
              </p>
            );
          })}
          <div className="flex flex-row justify-center -translate-x-12 pt-4">
            <label className="-rotate-90 translate-x-16">Portfolio</label>
            <img src={QR} alt="QR" className="w-32 h-32 " />
          </div>
        </div>
      </div>
      <div className="b-box col-span-3 px-8 pt-2 uppercase flex justify-start items-center text-xl font-extrabold text-cyan-800">
        Experience <FaChevronDown className="text-xl font-bold pl-2" />
      </div>{" "}
      {/*  */}
      <div className="col-span-1 row-span-2">
        {data.Work.map((item, index) => {
          return (
            <div className="pl-8" style={{ paddingTop: GradPadding[index] }} key={index}>
              {item.Time}
            </div>
          );
        })}
      </div>
      <div className="col-span-2 row-span-2">
        {data.Work.map((item, index) => {
          return (
            <div className="flex flex-col pt-4 px-4" key={index}>
              <div className=" text-lg font-bold flex flex-row">
                <FaAngleRight className="mt-1 opacity-30" />
                {item.Title}
              </div>
              <div className="pl-8 flex flex-row">
                <FaAngleDown className="mt-1 opacity-30" />
                {item.Place}
              </div>
              <div className="pl-8">
                {item.Data.map((data, index) => {
                  return (
                    <p className="pl-10 -indent-4 pt-1" key={index}>
                      &#183; {data}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-span-3 bg-cyan-900 rounded-tl-3xl px-4 pb-3 flex justify-end items-end text-xs text-white"> ./ Resume Created with React using Tailwind by Travis Heidelberger</div>
    </div>
  );
}
