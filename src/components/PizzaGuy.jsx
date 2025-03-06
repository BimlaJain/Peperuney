import React from 'react'
import Image from 'next/image'

const PizzaGuy = () => {
    return (
        <div className='pizzaguy-bg-image bg-center h-[2239px] bg-no-repeat bg-cover relative overflow-hidden'>
            <div className='!w-full '>
                <Image src="/assets/images/png/hero-bottom.png" alt='bottom layer' width={1508} height={202} className='w-full h-auto -mt-2' />
            </div>
            <div className="container max-w-[1300px] mx-auto">
                <div className="flex xl:mt-10 xl:justify-between justify-center items-center max-xl:flex-col-reverse flex-wrap">
                    <Image src="/assets/images/png/manager.png" alt='manager' width={580} height={530} className='xl:w-[580px] w-[450px]' />
                    <div className=''>
                        <div className="relative " >
                            <p className="md:text-[80px] text-[45px] font-regular text-white  absolute -top-1 -left-1" style={{ WebkitTextStroke: "2px black", WebkitTextFillColor: "#ffffff" }}>MEET PepeRuney</p>
                            <p className="md:text-[80px] text-[45px] font-regular text-black ">MEET PepeRuney</p>
                        </div>
                        <div className='z-10 relative md:-mt-16 -mt-10'>
                            <Image src="/assets/images/png/pizza-noticeboard.png" alt='noticeboard' width={715} height={553} className='md:w-[715px] w-[550px] max-sm:w-[360px] max-sm:h-[533px]' />
                            <div className='absolute md:left-[10%] md:bottom-[6%] left-[6%] bottom-[5%] max-sm:left-[12%] max-sm:bottom-[8%]'>
                                <p className='ff-schoolbell md:text-2xl text-lg font-normal md:leading-[180%] leading-normal md:max-w-[594px] max-w-[300px] border-b pb-2 border-black'>The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’. Spot the red hat and polo? You know it’s pizza time, baby! Whether he’s hustlin’ for the next big score or chillin’ with the Boys Club, PepeRuney guarantees one thing: the vibes and the dough are always rollin’</p>
                                <div className='flex justify-between py-3'>
                                    <p className='ff-schoolbell md:text-[32px] text-xl font-normal '>FEELS GREAT MAN!</p>
                                    <Image src="/assets/images/png/manefesto.png" alt='manefesto' width={262} height={74} className='md:w-[262px] w-[200px] max-sm:w-[130px]'/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>   
    )
}

export default PizzaGuy
