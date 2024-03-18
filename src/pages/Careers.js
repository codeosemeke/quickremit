import React from 'react'
import { Layout } from '../layouts/Index'
import ComplaintsImg from '../assets/img/careerHero.png'
import { Link } from 'react-router-dom'


const HeroView = () => {

    return (
        <>
            <div className="py-16 pt-24 md:pt-40 px-4 md:px-12 relative">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="hidden md:flex w-48 h-48 absolute right-10 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-72" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-full max-w-5xl pb-6 relative z-5">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl text-gray-900 leading-loose">
                        Come Work With Us
                    </h2>
                </div>
                <div>
                    <img src={ComplaintsImg} alt="Complaints" className="relative z-5" />
                </div>
            </div>
        </>
    )
}

const PageView = () => {
    return (
        <>
            <div className="pb-12 px-4 md:px-12 w-full max-w-5xl">
                <div className="py-4">
                    <p className="py-2 tracking-wider">Are you Passionate? Dynamic? and  Audacious?</p> 

                    <p className="py-2 tracking-wider">Join our team of transformers on our  mission to provide easy, secured, 
                        inexpensive and convenient international money transfers across every country around the world.</p> 

                    <p className="py-2 tracking-wider">We have an ever-evolving community motivated by the drive to unlock limitless possibilities across all borders.</p> 

                    <p className="py-2 tracking-wider">We uphold the culture of innovation, teamwork, discipline, hardwork, creativity and above all, 
                        inclusiveness as this guides our decisions in building a unique and dynamic team.</p> 

                    <p className="py-2 tracking-wider">If this sounds like what you want to be a part of - We are more than happy to have you.</p>

                    <p className="py-2 tracking-wider">Join us in connecting families, friends and businesses through seamless international transfers.</p> 
                </div>

                <div className="flex space-x-3 pt-10">
                    <Link className="bg-primary text-white rounded-sm py-2 px-4 text-lg leading-loose tracking-wide" to="/careers/view">
                        Join us now
                    </Link>
                </div>
            </div>
        </>
    )
}

export const Careers = () => {
    return (
        <>
            <Layout>
                <HeroView />

                <PageView />
            </Layout>
        </>
    )
}