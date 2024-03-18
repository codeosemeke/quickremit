import React from 'react'
import { Layout } from '../layouts/Index'
import { Link } from 'react-router-dom'

const HeroView = () => {
    return (
        <>
            <div className="pb-2 pt-20 px-4 md:px-12">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(70px)' }}></div>
                <div className="w-32 h-32 absolute right-4 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(90px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(70px)' }}></div>

                <div className="pb-4 md:pb-12 pt-4 relative z-5 ">
                    <Link to="/careers" className="underline text-primary font-medium">
                        Go Back
                    </Link>
                </div>
                <div className="w-full max-w-3xl pb-4 relative z-5 mx-auto">
                    <div className="w-full mx-auto text-center">
                        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-loose tracking-wider">
                            Join Us Now
                        </h2>
                        <p className="text-sm sm:text-lg text-gray-800 font-medium py-4 leading-loose">
                            Join our team of transformers on our  mission to provide easy, secured, inexpensive and convenient 
                            international money transfers across every country around the world.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

const JobForm = () => {
    return (
        <section className="pt-4 pb-12 bg-white px-2 sm:px-8 lg:px-16">

            <div className="w-full flex md:justify-center my-8">

                <div className="w-full md:w-4/6">

                    <div className="bg-white rounded mx-2 md:mx-0 border border-blue-200 p-2 sm:p-4">
                        <form action="#">
                            <div className="flex w-full flex-wrap py-3">
                                <div className="w-full sm:w-1/2 px-2">
                                    <label className="mb-2 text-gray-700">First Name</label>
                                    <input placeholder="First name" required type="text" name="first_name" className="block border w-full rounded py-2 px-3 border-blue-200 focus:outline-none" />
                                </div>

                                <div className="w-full sm:w-1/2 px-2">
                                    <label className="mb-2 text-gray-700">Last Name</label>
                                    <input placeholder="Last name" required type="text" name="last_name" className="block border w-full rounded py-2 px-3 border-blue-200 focus:outline-none" />
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap py-3">
                                <div className="w-full sm:w-1/2 px-2">
                                    <label className="mb-2 text-gray-700">Email Address</label>
                                    <input placeholder="john@doe.com" required type="email" name="email" className="block border w-full rounded py-2 px-3 border-blue-200 focus:outline-none" />
                                </div>

                                <div className="w-full sm:w-1/2 px-2">
                                    <label className="mb-2 text-gray-700">Phone Number</label>
                                    <input placeholder="e.g. +23409909890" required type="text" name="phone" className="block border w-full rounded py-2 px-3 border-blue-200 focus:outline-none" />
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap py-3 px-2">
                                <label class="block mb-2 text-gray-700">Role</label>
                                <select placeholder="Select role" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-blue-200 focus:outline-none rounded">
                                    <option>Business Development</option>
                                    {/* <option>Front-End Developer</option>
                                    <option>Back-End Developer</option>
                                    <option>Product Manager</option> */}
                                </select>
                            </div>

                            <div className="w-full px-2 py-3">
                                <label className="mb-2 text-gray-700">What is special about you, what would you do differently?</label>
                                <textarea placeholder="Enter message here" required rows="5" name="message" className="block border w-full rounded py-2 px-3 border-blue-200 focus:outline-none"></textarea>
                            </div>

                            <div className="w-40 md:w-64 px-2 py-3">
                                <button type="submit" className="w-full border border-transparent rounded-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white bg-primary focus:outline-none">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    )
}


export const CareerView = () => {
    return (
        <>
            <Layout>
                <HeroView />

                <JobForm />
            </Layout>
        </>
    )
}