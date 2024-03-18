import React from 'react'
import { Layout } from '../layouts/Index'
import { Link } from "react-router-dom";

const CategoryList = () => {
    const chevronRight = `<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>`
    return (
        <>
            <nav className="space-y-1 border border-blue-100 py-1 rounded-md">
            {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" --> */}
                <button className="w-full bg-primary text-white flex items-center px-3 py-3 text-sm font-semibold justify-between" aria-current="page">
                    <span className="truncate"> Dashboard </span>
                    <div dangerouslySetInnerHTML={{ __html: chevronRight}}></div>
                </button>

                <button className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 flex items-center justify-between px-3 py-2 text-sm font-medium">
                    <span className="truncate"> Team </span>
                    <div dangerouslySetInnerHTML={{ __html: chevronRight}}></div>
                </button>

                <button className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 flex items-center justify-between px-3 py-2 text-sm font-medium">
                    <span className="truncate"> Projects </span>
                    <div dangerouslySetInnerHTML={{ __html: chevronRight}}></div>
                </button>

                <button className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 flex items-center justify-between px-3 py-2 text-sm font-medium">
                    <span className="truncate"> Calendar </span>
                    <div dangerouslySetInnerHTML={{ __html: chevronRight}}></div>
                </button>

                <button className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 flex items-center justify-between px-3 py-2 text-sm font-medium">
                    <span className="truncate"> Documents </span>
                    <div dangerouslySetInnerHTML={{ __html: chevronRight}}></div>
                </button>
            </nav>
        </>
    )
}

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
                            <span className="ml-4 text-sm text-primary" aria-current="page">Sending Money</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </>
    )
}

const FaqsCategoryItems = () => {
    return (
        <>
            <div>
                <div className="w-full pb-4 w-full max-w-4xl mx-auto">
                    <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-gray-700 leading-loose tracking-wider">
                        Sending money - With Card
                    </h2>
                </div>
                <div className="w-full pb-8 w-full max-w-4xl mx-auto border-b border-blue-100">
                    <div className="py-4">
                        <Link to="/faqs/view" className="text-primary text-lg leading-loose underline">
                            How do i send money with QuickRemit?
                        </Link>
                        <p className="text-md pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. 
                            Varius nunc venenatis id urna. 
                        </p>
                    </div>
                    <div className="py-4">
                        <Link to="/" className="text-primary text-lg leading-loose underline">
                            How long does a transfer take?
                        </Link>
                        <p className="text-md pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. 
                            Varius nunc venenatis id urna. 
                        </p>
                    </div>
                    <div className="py-4">
                        <Link to="/" className="text-primary text-lg leading-loose underline">
                            Can I send the exact amount?
                        </Link>
                        <p className="text-md pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. 
                            Varius nunc venenatis id urna. 
                        </p>
                    </div>
                    <div className="py-4">
                        <Link to="/" className="text-primary text-lg leading-loose underline">
                            How can i repeat a transfer?
                        </Link>
                        <p className="text-md pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. Varius nunc 
                            venenatis id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ac faucibus fringilla risus eget. 
                            Varius nunc venenatis id urna. 
                        </p>
                    </div>
                </div>
            </div>
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
                <div className="flex flex-wrap items-start relative z-5">
                    <div className="w-full md:w-1/4">
                        <CategoryList />
                    </div>
                    <div className="w-full md:w-3/4">
                        <FaqsCategoryItems />
                    </div>
                </div>
                
            </div>
        </>
    )
}


export const FaqsCategoryPage = () => {
    return (
        <>
            <Layout>
                <HeroView />

            </Layout>
        </>
    )
}