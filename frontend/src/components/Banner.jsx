import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
                <div className='order-2 md:order-1 w-full md:w-1/2 mt-8 md:mt-34 '>
                    <div className="space-y-8 md:space-y-12 mx-3">
                        <h1 className='text-4xl font-bold'>Hello,Everyone here we learn something <span className='text-[#00A385]'>new  everyday</span>.</h1>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque consectetur tenetur sapiente veritatis, corrupti voluptates dolorum quasi est.
                        </p>
                    </div>
                    <label className="input validator outline-none mt-4 flex md:mt-6 mx-3">
                        <svg className="h-[1em] opacity-50  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input type="email" placeholder="mail@site.com" className='grow bg-none' required />
                    </label>
                    <div className="validator-hint hidden mx-3">Enter valid email address</div>
                    <button className="btn mt-5 md:mt-7 w-3xs bg-[#00A385] text-white mx-3">Login</button>
                </div>
                <div className='w-full order-1 md:order-2 md:w-1/2 flex items-center justify-center'>
                <img src="upscale.png" className='h-[100%] md:h-[85%]' alt="book store image" />
                </div>
            </div>
        </>
    )
}

export default Banner
