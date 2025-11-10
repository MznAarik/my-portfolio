import React from 'react'

const Skills = () => {
    return (
        <>
            <div className='z-50 p-20 bg-background'>
                <div className='text-center space-y-6 '>
                    <h2 className='text-4xl font-bold ' id='skills'>
                        Skills & <span className='text-primary'>Expertise</span>
                    </h2>
                    <span>A comprehensive overview of my technical skills and areas of expertise</span>
                </div>
                <div className="containers flex flex-col justify-center items-center md:flex-row gap-10 p-6 leading-8">
                    <div className="frontend bg-gray-100 p-6 border-2 border-border rounded-2xl w-60 h-55 shadow-xl space-y-2 hover:border-secondary duration-500 transition-all [&_li::marker]:text-primary">
                        <h3 className='text-primary font-bold text-xl'>Frontend</h3>
                        <ul className="list-disc list-inside text-primary-inside">
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>Bootstrap</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>
                    <div className="frontend bg-gray-100 p-6 border-2 border-border rounded-2xl w-60 h-55 shadow-xl space-y-2 hover:border-secondary duration-500 transition-all [&_li::marker]:text-primary">
                        <h3 className="text-primary font-bold text-xl">Backend</h3>
                        <ul className="list-disc list-inside">
                            <li>Laravel</li>
                            <li>Python</li>
                            <li>PostgreSQL/MySQL</li>
                            <li>REST APIs</li>
                        </ul>
                    </div>
                    <div className="frontend bg-gray-100 p-6 border-2 border-border rounded-2xl w-60 h-55 shadow-xl space-y-2 hover:border-secondary duration-500 transition-all [&_li::marker]:text-primary">
                        <h3 className="text-primary font-bold text-xl">Tools</h3>
                        <ul className="list-disc list-inside">
                            <li>VS Code</li>
                            <li>Git & GitHub</li>
                            <li>pgAdmin</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills