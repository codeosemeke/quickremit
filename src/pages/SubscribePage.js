import React from 'react'
import Logo from '../components/Logo'
import SubscribeHero from '../assets/img/subscribe.png'
import { Link } from 'react-router-dom'
import MailchimpFormContainer from '../components/MailchimpFormContainer'

export const SubscribePage = () => {
    const svgWorld = `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="52" height="52" rx="4" fill="#0095DA" fill-opacity="0.24"/><path d="M26 16C20.48 16 16 20.48 16 26C16 31.52 20.48 36 26 36C31.52 36 36 31.52 36 26C36 20.48 31.52 16 26 16ZM25 33.93C21.05 33.44 18 30.08 18 26C18 25.38 18.08 24.79 18.21 24.21L23 29V30C23 31.1 23.9 32 25 32V33.93ZM31.9 31.39C31.64 30.58 30.9 30 30 30H29V27C29 26.45 28.55 26 28 26H22V24H24C24.55 24 25 23.55 25 23V21H27C28.1 21 29 20.1 29 19V18.59C31.93 19.78 34 22.65 34 26C34 28.08 33.2 29.97 31.9 31.39Z" fill="white"/></svg>`;
    const svgMore = `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="52" height="52" rx="4" fill="#F27D10" fill-opacity="0.22"/><path d="M21.7 24.76C22.5267 24.9867 23.16 25.4 23.6 26C24.0533 26.6 24.28 27.3333 24.28 28.2C24.28 29.44 23.8133 30.4133 22.88 31.12C21.9467 31.8133 20.6533 32.16 19 32.16C17.3467 32.16 16.0533 31.8133 15.12 31.12C14.1867 30.4133 13.72 29.44 13.72 28.2C13.72 27.3333 13.9467 26.6 14.4 26C14.8533 25.3867 15.4933 24.9733 16.32 24.76C15.6133 24.4933 15.06 24.08 14.66 23.52C14.26 22.9467 14.06 22.28 14.06 21.52C14.06 20.3467 14.5 19.42 15.38 18.74C16.26 18.06 17.4667 17.72 19 17.72C20.5333 17.72 21.74 18.06 22.62 18.74C23.5 19.42 23.94 20.3467 23.94 21.52C23.94 22.2933 23.74 22.9667 23.34 23.54C22.94 24.1133 22.3933 24.52 21.7 24.76ZM19 19.74C17.3333 19.74 16.5 20.42 16.5 21.78C16.5 22.46 16.7067 22.98 17.12 23.34C17.5467 23.6867 18.1733 23.86 19 23.86C19.8267 23.86 20.4467 23.6867 20.86 23.34C21.2867 22.98 21.5 22.46 21.5 21.78C21.5 20.42 20.6667 19.74 19 19.74ZM19 30.14C20.9067 30.14 21.86 29.4267 21.86 28C21.86 26.5733 20.9067 25.86 19 25.86C17.0933 25.86 16.14 26.5733 16.14 28C16.14 29.4267 17.0933 30.14 19 30.14ZM33.0922 24.84L38.4522 32H35.4522L31.6322 26.72L27.7922 32H24.7922L30.1722 24.82L24.9922 17.9H27.9922L31.6322 22.96L35.2922 17.9H38.2922L33.0922 24.84Z" fill="#F27C0E" fill-opacity="0.9"/></svg>`;
    const svgShare = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="#555555"/></svg>`
    return (
        <>
            <div className="h-screen fixed top-0 w-full">
                <div className="h-full flex bg-white overflow-hidden mx-auto">
                    <div className="hidden lg:block lg:w-1/2 bg-cover h-full" style={{ backgroundImage: `url(${SubscribeHero})`}}>
                        <div className="relative h-full">
                            <div className="flex justify-end flex-col h-full pb-12 px-8 w-full">
                                <div className="flex justify-center flex-col items-start">
                                    <span className="block text-white py-1 text-3xl font-bold tracking-wider">
                                        We are bringing next-level fast, cheap 
                                        and secured International transfers to
                                        your country
                                    </span> 
                                    <span className="block text-white py-1">
                                        Be the first to get access to exclusive deals on super-fast transfers to
                                        family and friends on the QuickRemit website or Mobile app.
                                    </span> 
                                    <div>
                                        <div className="flex items-center my-2">
                                            <div dangerouslySetInnerHTML={{ __html: svgMore }}></div>
                                            <span className="block text-white py-1 pl-2">Faster than your local bank</span>
                                        </div>
                                        <div className="flex items-center my-2">
                                            <div dangerouslySetInnerHTML={{ __html: svgWorld }}></div>
                                            <span className="block text-white py-1 pl-2">No Hidden Fees</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-8 pt-4 lg:w-1/2 h-full overflow-y-auto flex flex-col justify-center">
                        <div className="my-4 px-2 sm:px-6 md:px-8">
                            <Link to="/" className="inline-flex items-center text-primary">
                                <Logo />
                            </Link> 
                        </div>  

                        <div>
                            <div className="px-2 sm:px-6 md:px-8">
                                <div className="flex flex-col items-start">
                                    <div className="my-4">
                                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">Get Ready!</h2>
                                        <p className="py-2 font-light text-gray-400">
                                            Secure your spot by filling this form
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-2 sm:px-6 md:px-8">
                                <MailchimpFormContainer />
                            </div>

                            <div className="px-2 sm:px-6 md:px-8 flex items-start">
                                <div className="pt-2" dangerouslySetInnerHTML={{ __html: svgShare }}></div>
                                <p className="leading-loose pl-4">
                                    Refer your friends to join the waitlist and stand a chance of winning amazing rewards
                                </p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}