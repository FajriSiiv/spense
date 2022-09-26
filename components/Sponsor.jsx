import Image from "next/image";
import Facebook from "../Assets/Facebook Logo.png";
import Dribble from "../Assets/Dribbble Logo.png";
import Youtube from "../Assets/Youtube Logo.png";
import Google from "../Assets/Google Logo.png";
// import Reddit from "../Assets/Reddit Logo.png";

const spoMap = [Facebook, Dribble, Youtube, Google, Dribble];

const Sponsor = () => {
  return (
    <div className="grid grid-cols-3 gap-2 px-2 my-4">
      <div className="h-7 max-w-[10rem] relative">
        <Image src={Facebook} layout="fill" objectFit="contain" />
      </div>
      <div className="h-7 max-w-[10rem] relative">
        <Image src={Dribble} layout="fill" objectFit="contain" />
      </div>
      <div className="h-7 max-w-[10rem] relative">
        <Image src={Youtube} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Sponsor;
