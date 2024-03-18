import React from 'react'
import { countriesFlagOptions } from '../../Data/Contents/CountriesContents'
import { Link } from 'react-router-dom'
import { CalculatorForm } from '../CalculatorForm'

export const HeroView = () => {
    const flagLists = countriesFlagOptions.map((option, key) => (
        <div key={key} className="my-1 shadow rounded-lg py-1 flex justify-center px-2 items-center">
            <img src={option.flag} alt="Flags" className="pr-2 py-2" />
            <p className="text-xs font-semibold text-gray-900">
                {option.name}
            </p>  
        </div>
    ))
    return (
        <>
            <div className="relative py-16 pt-24 md:pt-24" style={{ background: 'linear-gradient(188.32deg, #F5FBFE 48.18%, rgba(245, 251, 254, 0) 85.78%)'}}>
                <div className="hidden md:flex w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="md:w-48 md:h-48 absolute right-10 bottom-64 md:bottom-40" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-24 h-24 absolute right-1/2 bottom-48" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="px-4 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="col-span-6">
                            <div className="w-40 mb-2 text-sm font-semibold text-gray-500 bg-blue-200 text-center rounded-full uppercase py-1 px-2">
                                coming soon
                            </div>
                            <h1 className="text-center md:text-left font-bold text-2xl md:text-5xl max-w-xl text-gray-900 leading-loose tracking-wider">
                                Send Money Anywhere
                                Faster, Cheaper, and 
                                Safer with <span style={{ color: 'orange' }}>ease.</span>
                            </h1>
                            <p className="hidden sm:flex text-gray-900 text-xl leading-relaxed mt-8 font-medium tracking-wide">
                                Join the leagues of satisfied customers who use QuickRemit to send money and 
                                make payments around the world. Enjoy seamless transfers to all 
                                bank accounts globally, with no hidden charges.
                            </p>

                            <div className="flex space-x-4 pt-10 justify-center sm:justify-start">
                                <Link to="/subscribe" className="bg-primary text-white rounded-md py-2 px-4 md:px-6 text-base leading-loose tracking-wide">
                                    Get started now
                                </Link>
                                <Link className="hidden flex items-center border-primary border rounded-md py-2 px-4 md:px-6 text-base leading-loose tracking-wide" to="#" target="_blank" rel="noreferrer">
                                    <span className="pr-2">See how it works</span>
                                    <svg className="text-primary" width={24} height={27} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_118_78)"><path d="M12 2.94118C6.48 2.94118 2 7.6847 2 13.5294C2 19.3741 6.48 24.1176 12 24.1176C17.52 24.1176 22 19.3741 22 13.5294C22 7.6847 17.52 2.94118 12 2.94118ZM9.5 16.3565V10.7024C9.5 9.86588 10.38 9.35765 11.04 9.81294L15.19 12.64C15.8 13.0529 15.8 14.0059 15.19 14.4188L11.04 17.2459C10.38 17.7012 9.5 17.1929 9.5 16.3565Z" fill="#0095DA"/></g><defs><clipPath id="clip0_118_78"><rect width={24} height="25.4118" fill="white" transform="translate(0 0.823528)"/></clipPath></defs></svg>
                                </Link>
                            </div>

                            <div className="hidden sm:flex space-x-4 pt-6">
                                <div>
                                    <dl>
                                        <div className="flex items-center">
                                            <dt className="pr-2">
                                                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width={32} height={32} rx={2} fill="#EEF8FD"/><path d="M19.3333 15.1667C20.7166 15.1667 21.825 14.05 21.825 12.6667C21.825 11.2833 20.7166 10.1667 19.3333 10.1667C17.95 10.1667 16.8333 11.2833 16.8333 12.6667C16.8333 14.05 17.95 15.1667 19.3333 15.1667ZM12.6666 15.1667C14.05 15.1667 15.1583 14.05 15.1583 12.6667C15.1583 11.2833 14.05 10.1667 12.6666 10.1667C11.2833 10.1667 10.1666 11.2833 10.1666 12.6667C10.1666 14.05 11.2833 15.1667 12.6666 15.1667ZM12.6666 16.8333C10.725 16.8333 6.83331 17.8083 6.83331 19.75V21C6.83331 21.4583 7.20831 21.8333 7.66665 21.8333H17.6666C18.125 21.8333 18.5 21.4583 18.5 21V19.75C18.5 17.8083 14.6083 16.8333 12.6666 16.8333ZM19.3333 16.8333C19.0916 16.8333 18.8166 16.85 18.525 16.875C18.5416 16.8833 18.55 16.9 18.5583 16.9083C19.5083 17.6 20.1666 18.525 20.1666 19.75V21C20.1666 21.2917 20.1083 21.575 20.0166 21.8333H24.3333C24.7916 21.8333 25.1666 21.4583 25.1666 21V19.75C25.1666 17.8083 21.275 16.8333 19.3333 16.8333Z" fill="#001E2C"/></svg>
                                            </dt>
                                            <dd>Over million customers</dd>
                                        </div>
                                    </dl>
                                    <Link className="hidden py-2 flex items-center text-primary underline rounded-md text-lg leading-loose tracking-wide" to="#" target="_blank" rel="noreferrer">
                                        <span className="pr-2 text-sm">Read on Trustpilot</span>
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.29006 6.71001C8.90006 7.10001 8.90006 7.73001 9.29006 8.12001L13.1701 12L9.29006 15.88C8.90006 16.27 8.90006 16.9 9.29006 17.29C9.68006 17.68 10.3101 17.68 10.7001 17.29L15.2901 12.7C15.6801 12.31 15.6801 11.68 15.2901 11.29L10.7001 6.70001C10.3201 6.32001 9.68006 6.32001 9.29006 6.71001Z" fill="#0095DA"/></svg>
                                    </Link>
                                </div>
                                <div className="px-2">
                                    <svg width={1} height={56} viewBox="0 0 1 56" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499998" y2={56} stroke="#EFEFEF"/></svg>
                                </div>
                                <div>
                                    <dl>
                                        <div className="flex items-center">
                                            <dt>
                                                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width={32} height={32} rx={2} fill="#EEFFF5"/><path d="M21.3 10.3C20.91 9.91 20.28 9.91 19.89 10.3L14.25 15.94L15.66 17.35L21.3 11.7C21.68 11.32 21.68 10.68 21.3 10.3ZM25.54 10.29L15.66 20.17L12.18 16.7C11.79 16.31 11.16 16.31 10.77 16.7C10.38 17.09 10.38 17.72 10.77 18.11L14.95 22.29C15.34 22.68 15.97 22.68 16.36 22.29L26.95 11.71C27.34 11.32 27.34 10.69 26.95 10.3H26.94C26.56 9.9 25.93 9.9 25.54 10.29ZM5.12001 18.12L9.30001 22.3C9.69001 22.69 10.32 22.69 10.71 22.3L11.41 21.6L6.53001 16.7C6.14001 16.31 5.51001 16.31 5.12001 16.7C4.73001 17.09 4.73001 17.73 5.12001 18.12Z" fill="#00923F"/></svg>
                                            </dt>
                                            <dd>FCA Regulated</dd>
                                        </div>
                                    </dl>
                                    <Link className="hidden py-2 flex items-center text-primary underline rounded-md text-lg leading-loose tracking-wide" to="#" target="_blank" rel="noreferrer">
                                        <span className="pr-2 text-sm">Learn More</span>
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.29006 6.71001C8.90006 7.10001 8.90006 7.73001 9.29006 8.12001L13.1701 12L9.29006 15.88C8.90006 16.27 8.90006 16.9 9.29006 17.29C9.68006 17.68 10.3101 17.68 10.7001 17.29L15.2901 12.7C15.6801 12.31 15.6801 11.68 15.2901 11.29L10.7001 6.70001C10.3201 6.32001 9.68006 6.32001 9.29006 6.71001Z" fill="#0095DA"/></svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="py-4 hidden md:block">
                                <p>Some of the countries we serve</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 py-4 pt-2">
                                    { flagLists }
                                </div>
                            </div> 
                        </div>
                        
                        <div className="col-span-6">
                            <CalculatorForm />
                        </div>
                    </div>

                    <div className="py-4 md:hidden block">
                        <p>Some of the countries we serve</p>
                        <div className="grid grid-cols-3 md:grid-cols-8 gap-2 md:gap-3 py-4 pt-2">
                            { flagLists }
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}