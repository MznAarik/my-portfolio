import React from 'react'
import ProjectCard from '../components/ProjectCard'

export const Projects = () => {
    return (
        <>
            <section id='projects'
                className="bg-background py-16 px-6 flex justify-center items-center flex-col"
            >
                <h1 className='text-4xl font-bold text-primary text-center mb-12'>
                    Featured <span className='text-gray-800'>Projects</span>
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <ProjectCard />
                </div>
            </section>
        </>
    )
}
