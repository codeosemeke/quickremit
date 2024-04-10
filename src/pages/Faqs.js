import React, { useState, useEffect } from 'react'
import { Layout } from '../layouts/Index'
import { FaqsView } from '../views/FaqsView'
import { Link } from 'react-router-dom'
import { faqsOptions } from '../Data/Contents/FaqsContents'
import NoData from '../assets/img/no-data.svg'

const HeroView = ({ search, setSearch }) => {
    return (
        <>
            <div className="py-16 pt-40 px-12">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="w-48 h-48 absolute right-10 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-72" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-full pb-4 flex flex-col items-center max-w-2xl mx-auto text-center">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-loose tracking-wider">
                        Here to Support you
                    </h2>
                    <p className="text-sm sm:text-base text-gray-800 font-medium py-4">
                        Need any assistance or support? Explore the resources below.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <form>   
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input
                                value={search}
                                onChange={(text) => setSearch(text.target.value)} 
                                type="search" 
                                id="default-search" 
                                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-blue-100 focus:outline-none" 
                                placeholder="Search FAQs..." 
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

const FaqsListsView = () => {
    const lists = [1,2,3,4].filter(n => !n.isServiceWhy).map((option, key) => (
        <div key={key} className="shadow-lg rounded-lg py-4 flex px-2 md:px-6 items-center">
            {/* <div className="pr-2" dangerouslySetInnerHTML={{ __html: option.svg}}></div> */}
            <Link to="/faqs/category">
                <p className="text-xs font-semibold text-gray-900">
                    {/* {option.title} */}
                    Hello World
                </p> 
                <p className="text-xs font-medium text-gray-600">
                    {/* {option.description} */}
                    Hello World Hello Jane Doe
                </p> 
            </Link> 
        </div>
    ))

    return (
        <>
            <div className="py-4 pb-12 px-12 hidden">
                <div className="max-w-5xl mx-auto">
                    <p className="uppercase text-gray-500">Explore all topics</p>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-x-12 py-3">
                            { lists }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const FaqsSection = ({ faqs }) => {
    return (
        <>
            <div className="max-w-5xl px-4 py-8 mx-auto border-t border-blue-100">
                <div>
                    <h2 className="text-gray-500 font-semibold py-2 uppercase">Explore all Faqs</h2>
                </div>
                {
                    faqs.length > 0 
                    ? <FaqsView faqs={faqs} /> 
                    : <div className='flex flex-col items-center justify-center py-12'>
                        <img alt='No Data' src={NoData} className='p-4 w-48 h-auto' />
                        <p>No Data Found</p>
                    </div>
                }
                
            </div> 
        </>
    )
}

export const Faqs = () => {
    const [search, setSearch] = useState('')
    const [faqsArray, setFaqsArray] = useState([])
    const filterFaqs = () => {
        let lists = []
        if(search) {
            lists = faqsOptions.filter(faqs => faqs.question.toLowerCase().includes(search.toLowerCase())) 
        }
        else{
            lists = faqsOptions
        }
        setFaqsArray(lists)
    }

    useEffect(() => {
        filterFaqs()
    })
    return (
        <>
            <Layout>
                <HeroView search={search} setSearch={setSearch} />

                <FaqsListsView />

                <FaqsSection faqs={faqsArray} />
            </Layout>
        </>
    )
}