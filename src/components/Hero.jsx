"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import Header from './common/Header';
import PeperuneySlider from './common/CommonSlider';
const Hero = () => {
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
            <PeperuneySlider className='bg-[#DA291C] h-[76px] sm:h-[100px] flex items-center' />
        </div>
    )
}

export default Hero
