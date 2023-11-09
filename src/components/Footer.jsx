import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-xl pb-4'>AeyKhana</h1>
                <p className='text-sm'>
                    Indulge in a symphony of falvours, where each plate is a canvas for culinary
                    excellence.
                </p>
            </div>
            <div>
                <h className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h>
                <nav className='flex flex-col gap-2 pt-4'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Dishes</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>About</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Menu</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Reviews</a>
                </nav>
            </div>
            <div>
                <h className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h>
                <nav className='flex flex-col gap-2 pt-4'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Our Dishes</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Premium Menu</a>
                </nav>
            </div>
            <div>
                <h className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h>
                <nav className='flex flex-col gap-2 pt-4'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>AeyKhana@gmail.com</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>+292 2992 92839</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Social Media</a>
                </nav>
            </div>
        </div>
        <div>
            <p className='text-center py-4'>
                @CopyRight
                <span className='text-brightColor'> All Rights Reserved</span>
            </p>
        </div>
    </div>
  )
}

export default Footer;