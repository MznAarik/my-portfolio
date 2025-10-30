import React from "react";
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative py-20 px-6 bg-linear-to-br from-teal-50 via-white to-teal-100"
        >
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                    <span className="text-teal-600">Let's</span> Connect
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Have a project in mind or want to collaborate? I’d love to hear from
                    you — let’s create something amazing together!
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 max-w-5xl mx-auto">
                <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-center space-y-6 text-center md:text-left hover:border-accent">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600">
                        Feel free to reach out through any of the platforms below — I’ll get
                        back to you as soon as I can.
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <div>
                            <p className="font-semibold">Email</p>
                            <p className="text-teal-600 hover:underline cursor-pointer break-all">
                                mhrznaarik870@gmail.com
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold">Contact</p>
                            <p className="text-teal-600">+977-9861755755</p>
                        </div>

                        <div>
                            <p className="font-semibold">Location</p>
                            <p className="text-teal-600">Gwarko-17, Lalitpur</p>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <form className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col space-y-4 hover:border-accent">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-primary mb-1"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-primary mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your_email@gmail.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-primary mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Enter your message..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full bg-teal-600 text-white font-semibold py-3 rounded-md hover:bg-teal-700 transition-all shadow-md hover:shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div className="absolute top-0 left-0 w-32 h-32 bg-teal-300 rounded-full blur-3xl opacity-20"></div>

            <div className="copyright mb-4 text-center text-gray-600 mt-12">
                <span> ©️ 2025 My Portfolio. All rights reserved.</span>
            </div>

        </section>
    );
};

export default Contact;
