"use client";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const click = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-row  justify-between p-4  fixed w-full">
      <div className="flex flex-row ">
        <Image src={"/logo.png"} width={50} height={50} alt="slidemind" />
        <div className="text-white mt-3 text-xl font-extrabold tracking-wide my-auto font-sans">
          SlideMind
        </div>
      </div>
      <div className="my-auto">
        <ArrowRight onClick={()=> click()} className="h-10 w-10 text-white mr-5 border rounded-full p-2 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
