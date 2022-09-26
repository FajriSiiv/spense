import Image from "next/image";
import Sponsor from "./Sponsor";
import MobileEscrow from "../Assets/PhoneMobile.webp";
const Content = () => {
  return (
    <div>
      <Sponsor />
      <div className="bg-[#F0EEEB] px-5 pt-8 mx-3 h-full rounded-lg">
        <div>
          <h2 className="text-3xl max-w-[320px] font-bold ">
            Secure your money with Escrow.
          </h2>
          <p className="text-[#635D4E] text-sm max-w-[380px] my-3">
            Spense uses Escrow to secure all payment. We believe Escrow offers,
            the highest level of security for your payments, so you never need
            to worry about scams.
          </p>
          <a href="#" className="underline font-bold text-sm flex gap-2">
            Learn more about Escrow
          </a>
        </div>
        <div>
          <div className="relative min-h-[17rem] h-full max-h-[20rem] w-full">
            <Image src={MobileEscrow} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
