import Image from "next/image";
import React from "react";
import HeroMobile from "../Assets/HeroMobile.png";

const listMark = [
  { id: 1, desc: "Received 99% off the earnings." },
  { id: 2, desc: "Get paid via Debit Card, ACH, or PayPal." },
  { id: 3, desc: "Withdraw your earnings anytime." },
];

export default function Hero() {
  return (
    <div className="h-[100vh] w-full px-4 pt-4 bg-[#F0EEEB] ">
      <div className="max-h-[20rem] max-w-[360px] h-full w-full relative  mx-auto">
        <Image
          src={HeroMobile}
          layout="fill"
          objectFit="contain"
          alt="hero image"
        />
      </div>
      <div className="max-w-[360px] mx-auto">
        <h1 className="text-2xl font-bold">
          Share your unfiltered thoughts. Get paid.
        </h1>
        <p className="text-[#736E60] leading-snug text-[0.78rem] py-3">
          Spense is an open platform for individuals to share their unfiltered
          thoughts. Discuss the topics you love, and get paid for doing just
          that.
        </p>
        <div className="flex flex-col gap-y-1">
          {listMark.map((e) => (
            <div key={e.id} className="grid grid-cols-10 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 col-span-1"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="col-span-9 text-[0.8rem] text-[#5C5647] font-bold">
                {e.desc}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-7 gap-x-2">
          <input
            className="col-span-4 h-10 px-2 rounded-[4px] border-2 border-gray-200 text-sm"
            placeholder="email@gmail.com"
            type="text"
          />
          <button className="col-span-3 h-10 px-3 bg-black text-white rounded-[4px] text-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
