import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const ConRef = useRef(null);
  const isInView = useInView(ConRef, { once: false });

  return (
    <div className="h-[100vh] w-full">
      <h1 className="text-3xl">About</h1>
      <div ref={ConRef} className="flex justify-center gap-10">
        <div
          className={`bg-rose-500 w-40 h-40 opacity-100 ${
            isInView ? "opacity-100" : " opacity-0"
          } duration-700  delay-600 `}
        >
          <p className="text-3xl">Text 1</p>
        </div>

        <div
          className={`bg-gray-500 w-40 h-40 ${
            isInView ? "opacity-100" : "opacity-0"
          } duration-700  delay-400 opacity-100`}
        >
          <p className="text-3xl">Text 1</p>
        </div>
        <div
          className={`bg-blue-500 w-40 h-40 ${
            isInView ? "opacity-100" : "opacity-0"
          } duration-700  delay-200 opacity-100`}
        >
          <p className="text-3xl">Text 1</p>
        </div>
      </div>
      {/* <p
        className={`text-5xl transition-all duration-1000 ${
          isInView
            ? "text-blue-200 translate-x-[100px]"
            : "text-rose-500 translate-x-[-200px]"
        }`}
      >
        {isInView ? "Inview" : "Not inview"}
      </p>
      <p
        className={`text-5xl transition-all duration-1000 delay-300 ${
          isInView
            ? "text-blue-200 translate-x-[100px]"
            : "text-rose-500 translate-x-[-200px]"
        }`}
      >
        {isInView ? "Inview" : "Not inview"}
      </p> */}
    </div>
  );
}
