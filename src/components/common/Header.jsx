"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS , MENULIST , SOCIAL_LINKS_MENU } from "@/utils/helper";

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <div id="navbar" className="w-full mt-[30px] relative">
            <div className="container max-w-[1177px] mx-auto max-xl:px-[16px] flex items-center justify-between md:py-[18.5px] py-[5px]">
                <div className="flex gap-3  relative z-40  md:hidden">
                    <Image src="/assets/images/svg/flag.svg" alt="flag" width={41} height={31} className="cursor-pointer" />
                    <Image src="/assets/images/svg/down-arrow.svg" alt="down-arrow" width={16} height={16} className="cursor-pointer" />
                </div>
                <Link href="/">
                    <Image
                        width={262}
                        height={75}
                        src="/assets/images/png/logo.png"
                        alt="logo"
                        className="w-[262px] h-[75px] hidden md:block"
                    />
                </Link>
                
                <div className="flex gap-10 max-md:hidden">
                    <div className="flex gap-3  relative z-40 ">
                        <Image src="/assets/images/svg/flag.svg" alt="flag" width={41} height={31} className="cursor-pointer" />
                        <Image src="/assets/images/svg/down-arrow.svg" alt="down-arrow" width={16} height={16} className="cursor-pointer" />
                    </div>
                    <ul className="flex items-center gap-2 max-md:hidden">
                        {SOCIAL_LINKS.map((obj, index) => (
                            <li key={index} className="hover:scale-110 transition-all duration-300">
                                <Link href={obj.link} className="hover:scale-125 transition-all duration-300">
                                    <Image src={obj.icon} alt={obj.alt} width={77} height={67} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
               
                    <div
                        className="md:hidden z-30 cursor-pointer menu-bg w-[59px] h-[51px] relative flex justify-center items-center"
                        onClick={() => setOpen(!open)}
                    > 
                        <button className="relative z-30 flex flex-col justify-between items-center w-[24px] h-[11px]" onClick={() => setOpen(false)}>
                            <span
                                className={`bg-black w-[24px] h-1 block transition-all duration-300 ${open ? "rotate-44 translate-y-[3px]" : ""}`}
                            ></span>
                            <span
                                className={`bg-black w-[24px] h-1 block transition-all duration-300 ${open ? "-rotate-46 -translate-y-[5px]" : ""}`}
                            ></span>
                        </button>
                </div>
            </div>

           
            <div
                className={`fixed top-0 px-5 w-full h-full bg-white flex flex-col  justify-center transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    } md:hidden`}
            >
                <ul className="flex flex-col ">
                    {MENULIST.map((obj, index) => (
                        <li key={index}>
                            <div className="relative">
                                                                
                            <Link
                                href={obj.link}
                                    className={`text-[52px] hover:text-dark-orange transition-all duration-300 ${index === 0 ? "text-[#DA291C]" : "text-[#067A52]"
                    }`}
                                onClick={() => setOpen(false)}
                                >
                                    <p className=" text-black ">{obj.list}</p>

                                    <p className=" absolute -top-1 -left-1">{obj.list}</p>
                                </Link>
                                </div>
                        </li>
                    ))}
                </ul>
                <Link href="/">
                    <Image
                        width={262}
                        height={75}
                        src="/assets/images/png/logo.png"
                        alt="logo"
                        className="w-[262px] h-[74px] hidden max-md:block mb-7"
                    />
                </Link>
                <ul className="flex gap-6">
                    {SOCIAL_LINKS_MENU.map((obj, index) => (
                        <li key={index}>
                            <Link
                                href={obj.link}
                                className="text-lg text-black hover:text-dark-orange transition-all duration-300"
                                onClick={() => setOpen(false)} // Close menu on click
                            >
                                <Image src={obj.icon} alt={obj.alt} width={77} height={67} />
                            </Link>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    );
};

export default Header;
