"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import Header from './common/Header';
const Hero = () => {

    // useEffect(() => {
    //     gsap.to("#scooter", {
    //         y: -10, // Slight bobbing effect
    //         duration: 1,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "sine.inOut"
    //     });
    // }

    // );
    return (
        <div>
            <div className='hero-bg-image md:h-[850px] h-[700px] bg-center bg-no-repeat bg-cover relative overflow-hidden'>
                <Header />
                <div className='flex justify-center items-center'>
                    <div className="container">
                        <div className='flex justify-center md:mt-7 mt-20'>
                            <Image src="/assets/images/png/peperuney-heading.png" alt='heading' width={777} height={283} />
                        </div>
                        <div className='flex justify-center items-center '>
                            <Image src="/assets/images/png/pepruney-on-bike.png" alt='heading' width={341} height={317} className='mt-12' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#DA291C]  border-y-2 border-black md:pt-[30px] pt-4 md:pb-3 relative -z-10'>
                <Marquee className='flex '>
                    <div className="relative">
                        <p className="text-[40px] font-regular text-white mr-10 absolute -top-1 -left-1">$ PepeRuney</p>
                        <p className="text-[40px] font-regular text-black mr-10">$ PepeRuney</p>
                    </div>
                    <div className="relative">
                        <p className="text-[40px] font-regular text-white mr-10 absolute -top-1 -left-1">$ PepeRuney</p>
                        <p className="text-[40px] font-regular text-black mr-10">$ PepeRuney</p>
                    </div>
                    <div className="relative">
                        <p className="text-[40px] font-regular text-white mr-10 absolute -top-1 -left-1">$ PepeRuney</p>
                        <p className="text-[40px] font-regular text-black mr-10">$ PepeRuney</p>
                    </div>
                    <div className="relative">
                        <p className="text-[40px] font-regular text-white mr-10 absolute -top-1 -left-1">$ PepeRuney</p>
                        <p className="text-[40px] font-regular text-black mr-10">$ PepeRuney</p>
                    </div>
                    <div className="relative">
                        <p className="text-[40px] font-regular text-white mr-10 absolute -top-1 -left-1">$ PepeRuney</p>
                        <p className="text-[40px] font-regular text-black mr-10">$ PepeRuney</p>
                    </div>
                    <div className="relative">
                        <p className="text-[40px] font-regular text-white mr-10 absolute -top-1 -left-1">$ PepeRuney</p>
                        <p className="text-[40px] font-regular text-black mr-10">$ PepeRuney</p>
                    </div>
                    <div className="relative">
                        <p className="text-[40px] font-regular text-white mr-10 absolute -top-1 -left-1">$ PepeRuney</p>
                        <p className="text-[40px] font-regular text-black mr-10">$ PepeRuney</p>
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default Hero
