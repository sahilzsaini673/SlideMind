import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import SignIn from "./SignIn";

function Header() {
  return (
    <div className="flex flex-row justify-between p-4 bg-[#000]">
      <div className="flex flex-row ">
        <Image src={"/logo.png"} width={50} height={50} alt="slidemind" />
        <div className="text-white text-2xl font-extrabold tracking-wide my-auto font-sans">
          SlideMind
        </div>
      </div>
      <div className="my-auto">
        <SignIn></SignIn>
      </div> 
    </div>
  );
}

export default Header;