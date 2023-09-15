import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import footer1 from './../assets/img1.webp';
import footer2 from './../assets/ssdsd.jpg';
import footer3 from './../assets/sddefault.jpg';
import footer4 from './../assets/img2.jpeg';
import footer5 from './../assets/edad.jpeg';


const Partners=()=> {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1280 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        }
    };
    return(
        <div className='flex flex-col  justify-center '>
            {/* <div className='h-24 md:w-[80%] mx-auto'> */}
            <Carousel responsive={responsive} autoPlay={true} arrows={false} shouldResetAutoplay={true} rewind={true} rewindWithAnimation={true}>
                <div><img src={footer1} alt="" className='w-24 h-24 mx-auto' /></div>
                <div><img src={footer2} alt="" className='w-24 h-24 mx-auto' /></div>
                <div><img src={footer3} alt="" className='w-24 h-24 mx-auto' /></div>
                <div><img src={footer4} alt="" className='w-24 h-24 mx-auto' /></div>
                <div><img src={footer5} alt="" className='w-24 h-24 mx-auto' /></div>
            </Carousel>
        </div>
    );
};

export default Partners;