import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import PhotoFilterIcon from "@mui/icons-material/PhotoFilter";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 backdrop-blur-3xl shadow-md px-6 md:px-20 py-4 flex justify-between items-center z-50">
            {/* Logo */}
            <a
                href="#home"
                className="text-primary font-bold text-xl hover:text-secondary hover:animate-pulse transition-all duration-300"
            >
                Aarik Maharjan.
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
                <a
                    href="#about"
                    className="inline-flex items-center text-foreground hover:text-primary hover:scale-105 hover:animate-pulse transition-transform duration-100 snap-start scroll-mt-20"
                >
                    <InfoIcon className="mr-1" /> About
                </a>
                <a
                    href="#projects"
                    className="inline-flex items-center text-foreground hover:text-primary hover:scale-105 hover:animate-pulse transition-transform duration-100 snap-start scroll-mt-20"
                >
                    <PhotoFilterIcon className="mr-1" /> Projects
                </a>
                <a
                    href="#skills"
                    className="inline-flex items-center text-foreground hover:text-primary hover:scale-105 hover:animate-pulse transition-transform duration-100 snap-start scroll-mt-20"
                >
                    <QueryStatsIcon className="mr-1" /> Skills
                </a>
                <a
                    href="#contact"
                    className="inline-flex items-center text-foreground hover:text-primary hover:scale-105 hover:animate-pulse transition-transform duration-100 snap-start scroll-mt-20"
                >
                    <ContactEmergencyIcon className="mr-1" /> Contact
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-primary"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <CloseRoundedIcon /> : <MenuOpenRoundedIcon />}
            </button>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className={`absolute top-full ms-[210px] rounded-xl left-auto w-fit p-5 overflow-hidden bg-teal-100 duration-500 shadow-md items-center py-4 space-y-4 md:hidden`}>
                    <a
                        href="#about"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center hover:text-primary transition-colors duration-200"
                    >
                        <InfoIcon className="mr-1" /> About
                    </a>
                    <a
                        href="#projects"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center hover:text-primary transition-colors duration-200"
                    >
                        <PhotoFilterIcon className="mr-1" /> Projects
                    </a>
                    <a
                        href="#skills"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center hover:text-primary transition-colors duration-200"
                    >
                        <QueryStatsIcon className="mr-1" /> Skills
                    </a>
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center hover:text-primary transition-colors duration-200"
                    >
                        <ContactEmergencyIcon className="mr-1" /> Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
