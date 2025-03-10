"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const PeperuneySlider = ({ className = "", bgColor = "bg-red-500" }) => {
    const items = 26;
    return (
        <div className={`${className} relative overflow-hidden mx-auto w-full flex border-t-4 border-black border-b-[6px] ${bgColor}`}>
            <Marquee speed={30} gradient={false} pauseOnHover={true}>
                {Array.from({ length: items }).map((_, index) => (
                    <Image
                        key={index}
                        src="/assets/images/webp/pepeureny-slider-image.webp"
                        alt={`Item ${index}`}
                        className="w-[163px] h-[28px] sm:w-[233px] sm:h-[40px] pointer-events-auto object-cover mx-5 cursor-pointer"
                        width={233} height={40}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default PeperuneySlider;
