"use client"
import React, { useState } from "react";
import Image from "next/image";

const PeperuneyToons = () => {
    const [play, setPlay] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="border-t-4 border-b-4 border-black bg-[#8B8581] w-full h-[39px]"></div>
            <div className="room-bg bg-no-repeat bg-100 bg-cover bg-center xl:bg-left min-h-[700px] md:min-h-[900px] pt-8 relative overflow-hidden max-sm:-mt-[1px]">
                <img src="/assets/images/webp/block-text.webp" alt="block" className="mx-auto lg:mr-[70px] mt-20 pointer-events-none" />
                <img
                    src="/assets/images/webp/peperuney-front-tv.webp"
                    alt="peperuney"
                    className="ml-auto absolute max-w-[347px] md:max-w-[668px] w-full right-0 z-20 pointer-events-none -bottom-5 md:bottom-0"
                />
                <div className="container relative mx-auto">
                    <div className="z-10 absolute xl:left-[343px] lg:left-[216px] left-6 sm:left-10 md:left-[88px] max-w-[265px] sm:max-w-[450px] md:max-w-[477px] w-full top-[195px] sm:top-[160px] md:top-[89px]">
                        <div className="relative">
                            <img src="/assets/images/webp/tv-screen.webp" alt="screen" className="z-10 relative" />
                            {play ? (
                                <iframe
                                    className="absolute left-0 top-0 w-full h-full z-20"
                                    src="https://www.youtube.com/embed/DPrUFesHCh4"
                                    title="Peperuney Pizza Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div
                                    onClick={() => setPlay(true)}
                                    className="bg-white grid place-items-center cursor-pointer rounded-full absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border-2 border-black duration-300 ease-linear hover:opacity-70"
                                >
                                    <Image src="/assets/images/svg/play.svg" alt="play" width={65} height={65} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeperuneyToons;
