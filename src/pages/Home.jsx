import Button from '@mui/material/Button'
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import SwipeDownAltRoundedIcon from '@mui/icons-material/SwipeDownAltRounded'

export const Home = () => {
    return (
        <>
            {/* Decorative Accent */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl opacity-20"></div>

            <div className="flex flex-col justify-center items-center min-h-screen px-4 md:bg-background not-sm:bg-gray-200" id="home">
                <div className="shadow-md backdrop-blur-2xl p-6 mt-20 flex flex-col items-center w-full max-w-3xl text-center rounded-2xl not-sm:bg-background">
                    <div className="text-primary border-2 border-accent bg-[#b8d6d9] rounded-full mt-4 px-4 py-2 w-fit cursor-pointer animate-pulse shadow-md">
                        Welcome to my portfolio
                    </div>

                    <div className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        <p>Full-Stack Developer &</p>
                        <p className="text-primary">Creative Problem Solver</p>
                    </div>

                    <p className="p-4 sm:p-6 md:p-8 text-sm sm:text-base text-gray-700">
                        Full-Stack Developer who loves solving real problems with smart code.
                        Simple, fast, and built with purpose.
                    </p>

                    <div className="action-buttons flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                        <Button
                            className="bg-primary border-2 rounded-md border-primary"
                            variant="contained"
                            endIcon={<CloudDownloadRoundedIcon />}
                        >
                            Resume
                        </Button>
                        <Button
                            className="bg-transparent border-2 border-primary text-primary rounded-md hover:shadow-lg"
                            endIcon={<SendRoundedIcon />}
                            href='#contact'
                        >
                            Contact
                        </Button>
                    </div>

                    <SwipeDownAltRoundedIcon className="text-[3rem] m-4 text-primary animate-bounce" />
                </div>
            </div>
        </>
    )
}
