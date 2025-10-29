import React from 'react'

const Skills = () => {
    return (
        <>
            <div className='z-50 mt-6 p-4'>
                <div className='text-center space-y-6 '>
                    <h2 className='text-4xl font-bold ' id='skills'>
                        Skills & <span className='text-primary'>Expertise</span>
                    </h2>
                    <span className=''>A comprehensive overview of my technical skills and areas of expertise</span>
                </div>
                <div className="containers flex gap-10 justify-center">
                    <div className="frontend">Frontend</div>
                    <div className="backend">Backend</div>
                    <div className="tools">Tools</div>
                </div>
            </div>
        </>
    )
}

export default Skills