'use client'

import React, { useState, useEffect } from "react";
import { Rozha_One, Tilt_Warp } from "next/font/google";
const TiltWarp = Tilt_Warp({ weight: "400", preload: false });
import TextTransition, { presets } from 'react-text-transition';
import { ProfilePic } from "@/assets";
import Image from "next/image";
import { Names, TechsConst } from "@/constants/HeroSectionConsts";

const RozhaOne = Rozha_One({ weight: "400", preload: false });

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={`${TiltWarp.className} py-32 text-3xl flex items-center justify-between animate-finalText`}>
      <div>
        <span className={RozhaOne.className}>
          अतः नमस्ते,
        </span>
        <br />
        <span>I Am</span> <del className="text-emerald-600">{Names[index]}</del>
        <br />
        <div className={`text-4xl text-emerald-600`}>{Names[(index + 1) % Names.length]}</div>
        <span>conjuring up web magic with</span>
        <h1 className={`text-4xl text-emerald-600`}>
          <TextTransition springConfig={presets.wobbly}>{TechsConst[index % TechsConst.length]}</TextTransition>
        </h1>
      </div>
      <div className="rounded-full overflow-hidden border-8 border-emerald-100 h-80 w-80">
        <Image className="w-full h-full object-cover" src={ProfilePic} alt="image" />
      </div>
    </div>
  );
}
