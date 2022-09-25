import Image from "next/image";
import React from "react";
import Menu from "../../Assets/Hamburger Menu.svg";
export default function Navbar() {
  return (
    <navbar>
      <div className="bg-black text-[#FDFDFD] ">
        <p className="text-[0.7rem]  px-6 py-3 text-center">
          😀To celebrate Spense's launch, we will be waiving all fees for the
          entire month of April.
          <br />
          <span className="underline">
            You will be receiving 100% of the earnings.
          </span>
          😀
        </p>
      </div>
      <div className="flex justify-between items-center px-4 py-2 h-10">
        <h1 className="font-extrabold text-sm">spense.</h1>
        <div className="relative h-5 w-5">
          <Image src={Menu} layout="fill" objectFit="contain" alt="menu" />
        </div>
      </div>
    </navbar>
  );
}
