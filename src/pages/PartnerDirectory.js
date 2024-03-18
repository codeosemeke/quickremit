import React from 'react'
import { Layout } from '../layouts/Index'
import ETranzact from '../assets/img/logos/etranzact.png'
import InterSwitch from '../assets/img/logos/interswitch.png'
import Visa from '../assets/img/logos/visa.png'
import MasterCard from '../assets/img/logos/mastercard.png'
import SecureTrading from '../assets/img/logos/secure_trading.png'
import WorldPay from '../assets/img/logos/worldpay.png'

const images = [MasterCard, Visa, WorldPay, ETranzact, SecureTrading, InterSwitch]
const HeroView = () => {
    const images_list = images.map((image, key) => (
        <div key={key} className="shadow-2xl rounded-lg py-1 my-2 flex justify-center px-2 items-center relative z-5 bg-white">
            <img src={image} alt="Partners" className="pr-2 py-2" />
        </div>
    ))

    return (
        <>
            <div className="py-16 pt-24 md:pt-40 px-4 md:px-12 relative">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="w-48 h-48 absolute right-10 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-full pb-4 text-center max-w-5xl mx-auto relative z-5">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-loose tracking-wider">
                        Partner Directory
                    </h2>
                    <p className="text-sm sm:text-base lg:text-md text-gray-800 font-medium py-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nisl sed massa pellentesque in suspendisse consequat in vel gravida. 
                        Enim tempus proin sit ac risus. Adipiscing. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nisl sed massa pellentesque in suspendisse consequat in vel gravida. 
                        Enim tempus proin sit ac risus. Adipiscing.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 md:gap-3 py-12 px-4 relative z-5">
                    { images_list }
                </div>
                <div className="w-full pb-4 text-center max-w-5xl mx-auto pt-12 relative z-5">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-loose tracking-wider py-2">
                        Become a Partner
                    </h2>
                    <p className="text-sm sm:text-base lg:text-md text-gray-800 font-medium py-4">
                        Express your interest in our remittance service and provide remittance services 
                        on our technology solution. Our partners include Money transfer operators, Banks, 
                        Corporate organisations and mobile money operators. We have a robust technology 
                        infrastructure and offer attractive pay-out options. Please reach us via the Contact 
                        page or send an email to support@quickremitltd.com
                    </p>
                    <div className="my-8">
                        <a 
                            className="bg-primary font-semibold text-white rounded-md py-3 px-4 md:px-8 text-base leading-loose tracking-wide" 
                            href="https://" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Become a partner
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export const PartnerDirectory = () => {
    return (
        <>
            <Layout>
                <HeroView />
            </Layout>
        </>
    )
}