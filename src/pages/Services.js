import React from 'react'
import { Layout } from '../layouts/Index'
import ServicesHero from '../assets/img/services-hero.png'
import { servicesOptions } from '../Data/Contents/OptionsContents'

const HeroView = () => {
    return (
        <>
            <div className="py-16 pt-24 md:pt-40 px-4 md:px-12">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="w-48 h-48 absolute right-10 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-full max-w-xl pb-4 relative z-5">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-loose tracking-wider">
                        Our Services
                    </h2>
                    <p className="text-sm sm:text-base text-gray-800 font-medium py-4">
                        QuickRemit offers various service options: Money Transfer, Bill Payments, 
                        Airtime Top-up Features include:
                    </p>
                </div>
                <img src={ServicesHero} alt="Service hero" className="relative z-5" />
            </div>
        </>
    )
}

const ServicesListsWhyView = () => {
    const lists = servicesOptions.filter(n => n.isServiceWhy).map((option, key) => (
        <div key={key} className="shadow rounded-lg py-4 my-2 flex px-2 md:px-6 items-center">
            <div className="pr-2" dangerouslySetInnerHTML={{ __html: option.svg}}></div>
            <div>
                <p className="text-xs font-semibold text-gray-900">
                    {option.title}
                </p> 
                <p className="text-xs font-medium text-gray-600">
                    {option.description}
                </p> 
            </div> 
        </div>
    ))

    return (
        <>
            <div className="py-4 pb-12 px-12">
                <p className="uppercase">Why use us</p>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:gap-x-12 py-3">
                        { lists }
                    </div>
                </div>
            </div>
        </>
    )
}

const ServicesListsView = () => {
    const lists = servicesOptions.filter(n => !n.isServiceWhy).map((option, key) => (
        <div key={key} className="shadow rounded-lg my-2 py-4 flex px-2 md:px-6 items-center">
            <div className="pr-2" dangerouslySetInnerHTML={{ __html: option.svg}}></div>
            <div>
                <p className="text-xs font-semibold text-gray-900">
                    {option.title}
                </p> 
                <p className="text-xs font-medium text-gray-600">
                    {option.description}
                </p> 
            </div> 
        </div>
    ))

    return (
        <>
            <div className="py-4 pb-12 px-12">
                <p className="uppercase">Explore our services</p>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:gap-x-12 py-3">
                        { lists }
                    </div>
                </div>
            </div>
        </>
    )
}

export const Services = () => {
    return (
        <>
            <Layout>
                <HeroView />
                <ServicesListsWhyView />
                <ServicesListsView />
            </Layout>
        </>
    )
}