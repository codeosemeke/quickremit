import React from 'react'
import {Routes, Route, Link} from "react-router-dom"
import ScrollToTop from "./ScrollToTop";
import { Home } from './pages/Index'
import { Services } from './pages/Services'
import { ContactUs } from './pages/ContactUs'
import { PartnerDirectory } from './pages/PartnerDirectory'
import { JoinAffiliate } from './pages/JoinAffiliate'
import { ReferralProgram } from './pages/ReferralProgram'
import { ComplaintsProcedures } from './pages/ComplaintsProcedures'
// import { JoinOurTeam } from './pages/JoinOurTeam'
// import { JoinOurTeamView } from './pages/JoinOurTeamView'
import { Terms } from './pages/Terms'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { AboutUs } from './pages/AboutUs'
import { Faqs } from './pages/Faqs'
// import { FaqsViewPage } from './pages/FaqsViewPage'
// import { FaqsCategoryPage } from './pages/FaqsCategoryPage'
import { SubscribePage } from './pages/SubscribePage'
import { Careers } from './pages/Careers'
import { CareerView } from './pages/CareerView'

const NotFound = () => (
    <>
        <div>
            <h2>Page Not Found!</h2>
            <Link to='/'>Go Home</Link>
        </div>
    </>
)

export const Router = () => {
    return (
        <div>
            <ScrollToTop>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/about-us" index element={<AboutUs />} />
                    <Route path="/our-services" index element={<Services />} />
                    <Route path="/contact-us" index element={<ContactUs />} />
                    <Route path="/partner-directory" index element={<PartnerDirectory />} />
                    <Route path="/join-affiliate" index element={<JoinAffiliate />} />
                    <Route path="/referral-program" index element={<ReferralProgram />} />
                    <Route path="/complaints-procedures" index element={<ComplaintsProcedures />} />
                    {/* <Route path="/join-our-team" index element={<JoinOurTeam />} /> */}
                    {/* <Route path="/join-our-team/view" index element={<JoinOurTeamView />} /> */}
                    <Route path="/terms" index element={<Terms />} />
                    <Route path="/privacy-policy" index element={<PrivacyPolicy />} />
                    <Route path="/faqs" index element={<Faqs />} />
                    {/* <Route path="/faqs/view" index element={<FaqsViewPage />} /> */}
                    {/* <Route path="/faqs/category" index element={<FaqsCategoryPage />} /> */}
                    <Route path="/subscribe" index element={<SubscribePage />} />
                    <Route path="/careers" index element={<Careers />} />
                    <Route path="/careers/view" index element={<CareerView />} />
                    <Route path="/careers/view" index element={<CareerView />} />
                    <Route path="*" index element={<NotFound />} />
                </Routes>
            </ScrollToTop>
        </div>
    )
}