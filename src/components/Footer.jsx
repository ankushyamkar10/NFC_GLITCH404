import React from "react";

const Footer=()=> {
    return(
        <footer className='bg-blue-950 grid grid-cols-1 gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 gap-6 justify-between py-6 md:py-14 px-5 md:px-20 text-gray-200'>
<div className='text-center md:text-left leading-loose'>
  <h1 className="text-white-400 text-[2rem]">Aapli Bank</h1>
  <p className="text-[1rem]">502 New Design, United States Of America​ Australia</p>
  <p className="text-[1rem]">(+01) 123-456-789</p>
  <a href="#" className='no-underline text-[1rem]'>demo@company.com</a>
</div>
<div className='text-center '>
  <h3 className='mb-3 text-[1.5rem]'>ABOUT US</h3>
  <ul className='leading-loose flex flex-col text-[1rem]'>
    <a href="#" className="no-underline hover:text-gray-300">Contact us</a>
    <a href="#" className="no-underline hover:text-gray-300">Home</a>
    <a href="#" className="no-underline hover:text-gray-300">Library</a>
    <a href="#" className="no-underline hover:text-gray-300">FAQs</a>
  </ul>
</div>
</footer>
    );
};

export default Footer;


