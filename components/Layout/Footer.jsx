import React from "react";

export default function Footer() {
  return (
    <div className="text-[#9C9B9B] bg-black py-8 px-3 grid grid-rows-3">
      <div>
        <h3 className="text-white">spense.</h3>
        <p className="text-sm my-2">
          Spense is an open platform for individuals to share their unfiltered
          throughts. Discuss the topics you love, and get paid for doing{" "}
          <i>just</i> that.
        </p>
      </div>
      <div className="grid grid-cols-8 ">
        <div className="flex flex-col gap-y-3 col-span-5">
          <h3 className="text-white font-bold text-lg">Company</h3>
          <li>About</li>
          <li>Customer</li>
          <li>Blog</li>
        </div>
        <div className="flex flex-col gap-y-3 ">
          <h3 className="text-white font-bold text-lg ">Opportunities</h3>
          <li className="font-['Poppins']">Jobs</li>
        </div>
      </div>
      <div className="grid grid-cols-8 mt-3">
        <div className="flex flex-col gap-y-3 col-span-5">
          <h3 className="text-white font-bold text-lg">Sitemap</h3>
          <li>Homepage</li>
        </div>
        <div className="flex flex-col gap-y-3">
          <h3 className="text-white font-bold text-lg">Resources</h3>
          <li>Support</li>
          <li>Contact</li>
          <li>FAQ</li>
        </div>
      </div>
    </div>
  );
}
