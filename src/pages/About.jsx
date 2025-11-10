import React from 'react'

export const About = () => {
    return (
        <section
            id="about"
            className="bg-gray-200 py-16 px-6 flex justify-center"
        >
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-16">
                {/* Left Text Section */}
                <div className="flex-1 text-gray-700 space-y-8 mt-25">
                    <h2 className="text-4xl font-semibold mb-4 text-center md:text-left">
                        About <span className="text-primary font-bold">Me</span>
                    </h2>
                    <p>
                        I'm passionate about building full-stack solutions that are both functional and
                        elegant. I love turning ideas into reliable applications and solving
                        tricky problems with a mix of logic and creativity.
                    </p>
                    <p>
                        Whether it’s creating APIs, improving performance, or collaborating with a
                        team, I always aim for clean, scalable, and maintainable code that lasts.
                    </p>
                </div>

                {/* Right Points Section */}
                <div className="points-icons flex-1 flex flex-col space-y-6 bg-white p-8 rounded-3xl">
                    {[
                        {
                            icon: '⚡',
                            title: 'Full-Stack Development',
                            desc: 'Designing clean REST APIs and integrating third-party services.'
                        },
                        {
                            icon: '🧠',
                            title: 'Analytical Thinking',
                            desc: 'Breaking down complex problems into efficient, logical solutions.'
                        },
                        {
                            icon: '🔗',
                            title: 'API Integration',
                            desc: 'Connecting applications seamlessly with external services and tools.'
                        },
                        {
                            icon: '🤝',
                            title: 'Team Collaboration',
                            desc: 'Working effectively with developers and designers to ship features faster.'
                        },
                        {
                            icon: '📦',
                            title: 'Version Control',
                            desc: 'Managing code efficiently with Git for collaboration and tracking.'
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="bg-[#E6F2F3] text-2xl rounded-md border-4 border-[#E6F2F3] w-12 h-11 flex items-center justify-center">
                                <span>{item.icon}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-primary">{item.title}</span>
                                <span className="text-gray-700">{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
