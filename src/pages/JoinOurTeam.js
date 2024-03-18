import React from 'react'
import { Layout } from '../layouts/Index'
import ServicesHero from '../assets/img/services-hero.png'
import { Link } from 'react-router-dom'

const jobsList = [
    'UI/UX designer', 'Front-End Eng.', 'Back-End Eng.', 'Product Manag.',
    'Auditors', 'Accountants', 'Sport Consultant', 'Data Analyst',
    'UI/UX designer', 'Front-End Eng.', 'Back-End Eng.', 'Product Manag.',
]

const HeroView = () => {
    return (
        <>
            <div className="py-16 pt-24 md:pt-40 px-4 md:px-12 relative">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="hidden md:flex w-48 h-48 absolute right-10 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-72" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-full max-w-xl pb-4 relative z-5">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-loose tracking-wider">
                        Join our team
                    </h2>
                    <p className="text-sm sm:text-base text-gray-800 font-medium py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Porta pellentesque cras vel sapien cursus diam, viverra. Viverra ut egestas purus libero sem.
                    </p>
                </div>
                <img src={ServicesHero} alt="Services Hero Banner" className="relative z-5" />
            </div>
        </>
    )
}

const JobsListsView = () => {
    const lists = jobsList.map((option, key) => (
        <Link to="/join-our-team/view" key={key} className="my-2 border border-blue-200 rounded-lg py-4 flex px-2 md:px-4 items-center">
            <div className="w-full">
                <div className="flex justify-between w-full items-start">
                    <div>
                        <h1 className="font-semibold text-gray-900 leading text-md capitalize">
                            { option }
                        </h1>
                        <p className="text-sm text-gray-400 font-light">Kwara Ilorin</p>
                    </div>

                    <div>
                        <span className="text-xs border border-primary rounded py-2 px-1 font-medium text-primary">
                            Full Time
                        </span>
                    </div>
                </div>

                <div className="pt-8">
                    <Link to="/join-our-team/view" className="text-primary font-semibold py-2 rounded">
                        View and Apply
                    </Link>
                </div>
            </div> 
        </Link>
    ))

    return (
        <>
            <div className="py-4 pb-12 px-4 md:px-12">
                <p className="uppercase text-gray-600">Open Roles</p>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 lg:gap-x-12 py-4">
                        { lists }
                    </div>
                </div>
            </div>
        </>
    )
}

export const JoinOurTeam = () => {
    return (
        <>
            <Layout>
                <HeroView />
                <JobsListsView />
            </Layout>
        </>
    )
}