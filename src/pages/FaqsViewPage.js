import React from 'react'
import { Layout } from '../layouts/Index'
import SmileEmoji from '../assets/img/smile_emoji.png'
import SadEmoji from '../assets/img/sad_emoji.png'
import { Link } from "react-router-dom";

const BreadCrumbNav = () => {
    return (
        <>
            <nav className="flex px-4" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                    <li>
                        <div>
                            <Link to="/faqs" className="text-primary text-sm font-medium">
                                <span>Help Home</span>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <svg className="flex-shrink-0 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <Link to="#" className="ml-4 text-sm font-medium text-primary">Sending Money</Link>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <svg className="flex-shrink-0 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="ml-4 text-sm text-primary" aria-current="page">Project Nero</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </>
    )
}

const HeroView = () => {
    return (
        <>
            <div className="py-16 pt-24 px-12 relative">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(70px)' }}></div>
                <div className="w-32 h-32 absolute right-4 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(90px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(70px)' }}></div>
                
                <div className="pb-12 relative z-5">
                    <BreadCrumbNav />
                </div>
                <div className="w-full pb-4 w-full max-w-4xl mx-auto relative z-5">
                    <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-gray-700 leading-loose tracking-wider">
                        How do i send money with QuickRemit
                    </h2>
                </div>
                <div className="w-full pb-8 w-full max-w-4xl mx-auto border-b border-blue-100">
                    <div className="py-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. 
                        </p>
                    </div>
                </div>
                <div className="w-full py-8 w-full max-w-4xl mx-auto border-b border-blue-100">
                    <p>Was this article helpful?</p>
                    <div className="flex gap-2 py-2">
                        <button className="inline-flex justify-center items-center border border-primary rounded-md px-4 py-2">
                            <img src={SmileEmoji} alt="Smile Emoji" className="w-5 h-5 mr-2" />
                            <span className="text-sm text-primary font-medium">Yes</span>
                        </button>
                        <button className="inline-flex justify-center items-center border border-primary rounded-md px-4 py-2">
                            <img src={SadEmoji} alt="Sa" className="w-5 h-5 mr-2" />
                            <span className="text-sm text-primary font-medium">No</span>
                        </button>
                    </div>
                </div>

                <div className="w-full py-8 w-full max-w-4xl mx-auto">
                    <p className="text-gray-700 font-semibold">Related articles</p>
                    <div className="py-2">
                        <Link to="#" className="text-primary underline text-sm block">
                            How do i send money with QuickRemit?
                        </Link>
                        <Link to="#" className="text-primary underline text-sm block">
                            How long does a transfer take?
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export const FaqsViewPage = () => {
    return (
        <>
            <Layout>
                <HeroView />

            </Layout>
        </>
    )
}