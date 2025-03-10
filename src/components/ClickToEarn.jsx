
import Description from "./common/Description";
import PeperuneySlider from "./common/CommonSlider";
import CustomHeading from "./common/CommonHeading";
import Image from "next/image";
const ClickToEarn = () => {

    return (
        <div className='flex flex-col'>
            <PeperuneySlider className='bg-[#DA291C] h-[76px] sm:h-[100px] flex items-center' />
            <div className='bg-cover bg-no-repeat bg-center relative click-bg max-sm:h-[1260px]'>
                <Image className='lg:max-w-[388px] sm:max-w-[279px] md:max-w-[300px] sm:block hidden absolute left-0 bottom-0' src="/assets/images/webp/click-image.webp" alt="click-image" width={388} height={854} />
                <div className='container sm:pt-[96px] pt-[60px] relative z-10 pb-[128px] justify-center items-center flex lg:items-end lg:justify-end'>
                    <div className='sm:max-w-[682px] w-full'>
                        <div className='flex justify-center items-center flex-col'>
                            <CustomHeading MyClass='sm:max-w-[555px] w-full text-center sm:block hidden' MyText={'CLICK-TO-EARN AND ARCADE'} />
                            <CustomHeading MyClass='sm:hidden block text-center' MyText={'CLICK TO EARN AND ARCADE'} />
                            <Image className='sm:max-w-[250px] -mt-2 sm:-mt-5 max-w-[195px]' src="/assets/images/webp/casino-logo.webp" alt="casino-image" width={250} height={105} />
                        </div>
                        <div className='bg-no-repeat bg-center bg-[length:100%_100%] -mt-[50px]' style={{ backgroundImage: `url(/assets/images/webp/casino-bg.webp)` }}>
                            <Description MyClass='md:max-w-[687px] px-4 pb-8 pt-14 sm:px-[30px] sm:pb-[30px] sm:pt-[50px]' MyText={'HEY YOU! Yeah, YOU! So you made it this far… Hell yeah I’m impressed! Means you’re serious about pizza, vibes, and big-time wins. Catch me at the slots or the poker table, always *ALL-IN* for that next big score. It’s the thrill, baby—the gamble, the grind—it keeps me fired up to build the ULTIMATE PIZZA EMPIRE! Wanna roll with the best? Smash that button, start stackin’ up, and show me what you got. FEELS GREAT MAN!'} />
                        </div>
                        <div className='sm:flex hidden justify-center w-full items-center flex-wrap gap-2 sm:gap-[30px] sm:mt-8'>
                            <button className='cursor-pointer transition duration-300 transform hover:scale-105 max-w-[241px]'> <Image className='max-w-[241px] w-full' src="/assets/images/svg/play-now.svg" alt="play-now" width={241} height={74.78} /></button>
                            <button className='cursor-pointer transition duration-300 transform hover:scale-105'><Image className='max-w-[241px] w-full' src="/assets/images/svg/mini-app.svg" alt="mini-app" width={241} height={74.78} /></button>
                        </div>
                        <div className='flex flex-col gap-2 sm:hidden justify-center items-center mt-2'>
                            <button className='cursor-pointer transition duration-300 transform hover:scale-105'><Image className='max-w-[335px] w-full' src="/assets/images/svg/play-now-two.svg" alt="mini-app" width={335} height={74.78} /></button>
                            <button className='cursor-pointer transition duration-300 transform hover:scale-105'><Image className='max-w-[335px] w-full' src="/assets/images/svg/mini-app-two.svg" alt="mini-app" width={335} height={74.78} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClickToEarn