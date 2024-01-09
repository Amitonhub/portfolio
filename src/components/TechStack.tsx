import React from 'react'
import { Rozha_One, Tilt_Warp } from "next/font/google";
const TiltWarp = Tilt_Warp({ weight: "400", preload: false });
import { TechStackLogos } from '@/constants/TechStackConsts';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

function TechStack() {
    return (
        <>
            <div>
                <div className={`${TiltWarp.className} flex gap-4 text-center align-baseline flex-col`}>
                    <h1 className='text-4xl'>
                        My
                        <span className='text-emerald-600 text-5xl'> T</span>ech
                        <span className='text-emerald-600 text-5xl'> S</span>tack
                    </h1>
                </div>
                <p className='tracking-widest text-center py-4'>
                    Technologies I’ve been working with recently
                </p>
            </div>
            <div className={`${TiltWarp.className} flex gap-4 text-center align-baseline flex-col pt-3`}>
                <div className="grid grid-cols-6 gap-4">
                    {TechStackLogos.map((logo, i) => (
                        <>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div key={i} className="flex items-center justify-center p-4">
                                            <Image src={logo.logo} alt={logo.name} />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{logo.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TechStack
