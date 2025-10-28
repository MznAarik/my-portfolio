import React from 'react'

export const Home = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center min-h-[600px]  z-50'>
                <div className=" text-primary border-2 border-accent backdrop-blur-3xl rounded-4xl px-4 py-1.5 m-10 cursor-pointer hover:animate-bounce">
                    Welcome to my portfolio
                </div>
                <div className='text-5xl font-extrabold leading-17'>
                    <div className="">
                        Full-Stack Developer &
                    </div>
                    <div className="text-primary">
                        Creative Problem Solver
                    </div>
                </div>
            </div>
        </>
    )
}
