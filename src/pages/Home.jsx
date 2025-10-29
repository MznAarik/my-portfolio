import Button from '@mui/material/Button'
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import SwipeDownAltRoundedIcon from '@mui/icons-material/SwipeDownAltRounded'

export const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-20 md:min-h-screen px-4" id="home">
            <div className="shadow-md backdrop-blur-2xl py-6 flex flex-col items-center w-full max-w-3xl text-center rounded-2xl">
                <div className="text-primary border-2 border-accent bg-[#caebee] rounded-full mt-4 px-4 py-2 w-fit cursor-pointer hover:animate-pulse shadow-md">
                    Welcome to my portfolio
                </div>

                <div className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    <p>Full-Stack Developer &</p>
                    <p className="text-primary">Creative Problem Solver</p>
                </div>

                <p className="p-4 sm:p-6 md:p-8 text-sm sm:text-base text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, impedit.
                    Iusto inventore similique quos odit laudantium obcaecati, sunt quia nulla vero quasi!
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
                    >
                        Contact
                    </Button>
                </div>

                <SwipeDownAltRoundedIcon className="text-[3rem] m-4 text-primary animate-bounce" />
            </div>
        </div>
    )
}
