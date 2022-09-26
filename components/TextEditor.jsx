import Image from "next/image";
import Editor from "../Assets/Text Editor.webp";
const TextEditor = () => {
  return (
    <div className="my-10 px-3">
      <div>
        <h2 className="text-3xl font-bold">A text editor like no other.</h2>
        <p className="my-3 text-sm text-[#635D4E]">
          Our text editor pulls you into focus mode with it's simplistic design
          and usability so you can put out your best writings.
        </p>
        <a href="#" className="underline font-bold text-sm">
          Text Editor Live Demo
        </a>
      </div>
      <div className="relative w-full h-60 mt-3">
        <Image src={Editor} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default TextEditor;
