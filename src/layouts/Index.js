import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    const gotoTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    window.onscroll = () => {
        const button_box = document.getElementById('button_box')
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button_box.classList.remove('hidden')
        } else {
            button_box.classList.add('hidden')
        }
    }
    return (
        <>
            <Header />
                { children }
            <Footer />

            <div id="button_box" className="fixed w-10 h-10 bottom-4 right-6 hidden">
                <button className="w-full h-full bg-primary text-white inline-flex justify-center items-center rounded-full" onClick={gotoTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
            </div>
        </>
    )
}