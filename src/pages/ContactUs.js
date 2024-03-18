import React from 'react'
import { Layout } from '../layouts/Index'
import { contactOptions } from '../Data/Contents/OptionsContents'
import { ContactFormContainer } from '../components/ContactFormContainer'

const HeroView = () => {
    return (
        <>
            <div className="py-16 pt-40 px-12 relative">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="hidden md:flex w-48 h-48 absolute right-10 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="md:flex w-20 h-20 absolute right-1/2 top-72" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-full pb-4 flex flex-col items-center">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-loose tracking-wider">
                        Contact Us
                    </h2>
                    <p className="text-sm sm:text-base text-gray-800 font-medium py-4">
                        Got a question or anything you want us to know? We will be happy to hear from you.
                    </p>
                </div>
            </div>
        </>
    )
}

const ContactDetails = () => {
    return (
        <div className="col-span-5">
            <div className="w-full">
                {contactOptions.map((option, key) => (
                    <div key={key} className="w-full bg-white rounded-lg p-4 sm:p-8 shadow-2xl mx-4 mb-4 flex items-center">
                        <div className="z-0 pr-4 sm:pr-6" dangerouslySetInnerHTML={{ __html: option.svg}}></div>
                        <div>
                            <p className="text-md font-semibold text-gray-900">
                                {option.title}
                            </p>
                            <p>{option.detail}</p>
                            { option.social ? 
                                <div className="flex mt-3 space-x-4 text-gray-600">
                                    <a href="https://web.facebook.com/quickremitltd" target="_blank" rel="noreferrer" className="rounded-full bg-blue-800 w-6 h-6 flex justify-center items-center">
                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_287_13)">
                                                <path
                                                d="M9.33139 2.32458H10.6095V0.0985833C10.389 0.06825 9.63064 0 8.74747 0C6.90472 0 5.64239 1.15908 5.64239 3.28942V5.25H3.60889V7.7385H5.64239V14H8.13555V7.73908H10.0868L10.3966 5.25058H8.13497V3.53617C8.13555 2.81692 8.32922 2.32458 9.33139 2.32458Z"
                                                fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_287_13">
                                                <rect width={14} height={14} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/quickremit" target="_blank" rel="noreferrer" className="rounded-full instagram w-6 h-6 flex justify-center items-center">
                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.2103 0H3.78967C1.70001 0 0 1.70001 0 3.78967V10.2104C0 12.3 1.70001 14 3.78967 14H10.2104C12.3 14 14 12.3 14 10.2104V3.78967C14 1.70001 12.3 0 10.2103 0V0ZM13.1792 10.2104C13.1792 11.8474 11.8474 13.1792 10.2103 13.1792H3.78967C2.15257 13.1792 0.820738 11.8474 0.820738 10.2104V3.78967C0.820738 2.15257 2.15257 0.820738 3.78967 0.820738H10.2104C11.8474 0.820738 13.1792 2.15257 13.1792 3.78967V10.2104Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.99989 3.172C4.88908 3.172 3.17188 4.8892 3.17188 7.00001C3.17188 9.11081 4.88908 10.828 6.99989 10.828C9.11069 10.828 10.8279 9.11081 10.8279 7.00001C10.8279 4.8892 9.11069 3.172 6.99989 3.172ZM6.99989 10.0073C5.34175 10.0073 3.99261 8.65825 3.99261 7.00001C3.99261 5.34187 5.34175 3.99274 6.99989 3.99274C8.65813 3.99274 10.0072 5.34187 10.0072 7.00001C10.0072 8.65825 8.65813 10.0073 6.99989 10.0073Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M10.9197 1.8125C10.2959 1.8125 9.78857 2.31996 9.78857 2.94363C9.78857 3.56741 10.2959 4.07487 10.9197 4.07487C11.5435 4.07487 12.0509 3.56741 12.0509 2.94363C12.0509 2.31985 11.5435 1.8125 10.9197 1.8125ZM10.9197 3.25403C10.7486 3.25403 10.6093 3.11474 10.6093 2.94363C10.6093 2.77241 10.7486 2.63324 10.9197 2.63324C11.0909 2.63324 11.2302 2.77241 11.2302 2.94363C11.2302 3.11474 11.0909 3.25403 10.9197 3.25403Z"
                                                fill="white"
                                            />
                                        </svg> 
                                    </a>
                                    <a href="https://twitter.com/QuickRemitltd" target="_blank" rel="noreferrer" className="rounded-full bg-primary w-6 h-6 flex justify-center items-center">
                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_287_17)">
                                                <path
                                                d="M14 2.76271C13.4794 3.00865 12.9246 3.17167 12.3462 3.25083C12.9412 2.86825 13.3954 2.26706 13.6089 1.54242C13.0541 1.89862 12.4416 2.15021 11.7889 2.29062C11.2621 1.6866 10.5114 1.3125 9.69238 1.3125C8.10337 1.3125 6.82412 2.70146 6.82412 4.40421C6.82412 4.64921 6.84338 4.88479 6.89062 5.10906C4.5045 4.98373 2.39313 3.75213 0.97475 1.876C0.727125 2.33867 0.581875 2.86825 0.581875 3.43835C0.581875 4.50881 1.09375 5.45771 1.85675 6.00708C1.39562 5.99765 0.94325 5.85348 0.56 5.62638C0.56 5.63581 0.56 5.64806 0.56 5.66031C0.56 7.16235 1.55487 8.40996 2.8595 8.69737C2.62587 8.76615 2.37125 8.79913 2.107 8.79913C1.92325 8.79913 1.73775 8.78783 1.56362 8.74637C1.9355 9.97042 2.99075 10.8703 4.2455 10.8995C3.269 11.7222 2.02912 12.2178 0.686875 12.2178C0.4515 12.2178 0.22575 12.2065 0 12.1754C1.27137 13.0584 2.77813 13.5625 4.403 13.5625C9.6845 13.5625 12.572 8.85096 12.572 4.767C12.572 4.63037 12.5676 4.49844 12.5615 4.36746C13.1311 3.93212 13.6097 3.3884 14 2.76271Z"
                                                fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_287_17">
                                                <rect width={14} height={14} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/company/quickremitltd/" target="_blank" rel="noreferrer" className="rounded-full text-white bg-primary w-6 h-6 flex justify-center items-center">
                                        <svg viewBox="0 0 24 24" width={14} height={14} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" class="css-i6dzq1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x={2} y={9} width={4} height={12}></rect><circle cx={4} cy={4} r={2}></circle></svg>
                                    </a>

                                    <a href="https://youtube.com/channel/UCvcqjmKDcRyTdhe_nZv3ksA" target="_blank" rel="noreferrer" className="rounded-full text-white bg-red-600 w-6 h-6 flex justify-center items-center">
                                        <svg viewBox="0 0 24 24" width={14} height={14} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" class="css-i6dzq1"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                                    </a>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const ContactForm = () => {
    return (
        <div className="hero-image col-span-7">
            <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-2xl">
                <ContactFormContainer />
            </div>
        </div>
    )
}

const ContactHeroView = () => {
    return (
        <>
            <div className="pb-12 px-4 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-4">
                    <ContactDetails />
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export const ContactUs = () => {
    return (
        <>
            <Layout>
                <HeroView />
                <ContactHeroView />
            </Layout>
        </>
    )
}