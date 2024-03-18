import React from 'react'
import { Layout } from '../layouts/Index'
import ComplaintsImg from '../assets/img/cp.png'


const HeroView = () => {

    return (
        <>
            <div className="py-16 pt-24 md:pt-40 px-4 md:px-12 relative">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="hidden md:flex w-48 h-48 absolute right-10 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-72" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-full max-w-5xl pb-6 relative z-5">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl text-gray-900 leading-loose">
                        Complaints Procedures
                    </h2>
                </div>
                <div>
                    <img src={ComplaintsImg} alt="Complaints" className="relative z-5" />
                </div>
            </div>
        </>
    )
}

const PageView = () => {
    return (
        <>
            <div className="pb-12 px-4 md:px-12">
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">You are Our Top Priority</h2>
                    <p>
                        At QuickRemit, we value your feedback and are committed to delivering excellent, 
                        efficient, and professional service. We aim to provide prompt, courteous, helpful, 
                        transparent, and informative advice and solution in response to every request made 
                        by our customers and customers to be. We are always keen to hear the views of our 
                        customers, as it helps us improve our service. We recognize that sometimes, you may 
                        have concerns, however, we will do what we can to resolve those concerns as quickly 
                        as possible and deliver the outstanding service that we live by.
                    </p>
                </div>
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">How to make a complaint</h2>
                    <div>
                        You can make a complaint in writing by letter, email or by telephone. Complaints should 
                        normally be directed to the member of staff with whom you have been dealing or our 
                        Complaints manager. This will give them the opportunity to explain what actions have been 
                        taken and to try to sort things out with you. If you would prefer, you can ask the member 
                        of staff for the name of their line manager and send your complaint to them or directly to 
                        our Complaints manager.
                    </div>
                </div>
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">What happens next?</h2>
                    <div>
                        <p>
                        We will use our best endeavours to treat complaints thoroughly, fairly and politely, and investigate 
                        them sensitively and respond promptly. Our target for replying to complaints is 15 business days from 
                        the date of receipt. If it is not possible to give you a full reply within this time – for instance 
                        because detailed investigation is required – we will give you an interim response, telling you what 
                        is being done to deal with your complaint, and when you can expect the full reply and from whom. 
                        Our Complaints Manager can be contacted: 
                        </p>
                        BY Post:<br />
                        QuickRemit Limited, 6th Floor, First Central 200, 2, Lakeside Drive, Park Royal, London NW10 7FQ <br />
                        By Telephone: <br />
                        44 (0)781 8513 341 or <br />
                        By Email: <br />
                        compliance@quickremitltd.com <br />
                        If, even after this stage, you remain dissatisfied with the response you may wish to contact the 
                        Financial Ombudsman Service (FOS) for further advice and guidance. <br />
                        This will not affect your legal rights. <br />
                        Financial Ombudsman Service, Harbour Exchange Square, London E14 9SR <br />
                        All complaints are recorded by QuickRemit Limited. These statistics are also used internally 
                        to improve our products and services.
                    </div>
                </div>
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">Complaints Handling Procedures</h2>
                    <p>
                        We recognize that we have an obligation to Customers who are dissatisfied with our service 
                        to resolve any PSD complaint within 15 business days or in exceptional circumstances within 
                        35 business days from the point of notification or if the complaint is not a PSD complain 
                        then we will look to resolve any complaint within 8 weeks of its receipt. If this is not 
                        possible for any reason, then we will state our reasons for not being able to do so and propose 
                        an alternate completion date to the Customer. To assist the Customer, we would highlight our 
                        complaints procedure.
                    </p>
                </div>
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">Acknowledgement</h2>
                    <p>
                        Upon receipt of a complaint, we will provide written acknowledgement within 5 business days of 
                        receiving the complaint (business days are Mondays-Fridays excluding bank holidays). The letter 
                        will contain details of our Complaints Procedure and of your right to refer the complaint to the 
                        Financial Ombudsman if you are dissatisfied with our assessment and ruling. It will also state who 
                        within QuickRemit Limited is dealing with the complaint and how to contact them (this will normally 
                        be the Complaints manager). 
                    </p>
                </div>
                
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">Initial Response</h2>
                    <p>
                        If the complaint is going to take more than three business days to resolve then we will issue an 
                        initial response, containing a full account of the investigation activities planned, any findings 
                        thus far and, if appropriate, any offer of redress. This letter will again advise the Customer of 
                        their rights, who is dealing with the complaint and how to contact that person.
                    </p>
                </div>
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">Complaints Resolved/Settled Within Three Business Days</h2>
                    <p>
                        Where a complaint has been resolved to a complainant’s satisfaction, within three business days QuickRemit
                         will promptly send the complainant a ‘Summary Resolution Communication’. This communication will;
                    </p>
                    <div>
                        <li>
                            Refer to the fact that the complainant has made a complaint and informs them that we now consider 
                            the complaint resolved to their satisfaction,
                        </li>
                        <li>
                            Demonstrate a clear calculation method for compensation, if any is being offered,
                        </li>
                        <li>
                            Tell the complainant that if they subsequently decide that they are dissatisfied with the resolution 
                            of the complaint they may be able to refer the complaint to the Financial Ombudsman Service; within six months,
                        </li>
                        <li>
                            Indicates whether QuickRemit consent to waive the relevant time limits; where we have discretion in such matters,
                        </li>
                        <li>
                            Provide the website address of the Financial Ombudsman Service,
                        </li>
                        <li>
                            Refer to the availability of further information from the Financial Ombudsman Service’s website.
                        </li>
                    </div>
                    
                </div>
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">Further Acknowledgement</h2>
                    <p>
                        In the situation whereby, the complainant responds to the Initial Response then again QuickRemit 
                        Limited will acknowledge receipt of response within 5 business days.
                    </p>
                </div>
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">Holding Response</h2>
                    <p>
                        If, for whatever reason, QuickRemit Limited is unable to conclude the investigation and provide 
                        a Final Response (see below) to the complaint then QuickRemit Limited will issue what is called 
                        a Holding Response. The purpose of this Holding Response is to inform the complainant of the reasons 
                        why QuickRemit Limited cannot provide a Final Response and to provide a further indication of what 
                        is happening with the complaint and to provide an indication of when the complainant can expect to 
                        hear from QuickRemit Limited again. In the event that the complainant receives a Holding Response, 
                        QuickRemit Limited may invite the complainant to discuss the matter personally with the Company’s 
                        COO or Managing Director. The purpose of this step is to ensure that the complaint (and the complainant) 
                        receives the highest priority in those situations where the complaint cannot be fully resolved through 
                        normal investigatory processes.
                    </p>
                </div>
            
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">Final Response</h2>
                    <p>
                        Once QuickRemit Limited has completed its investigation we will write to the complainant and offer 
                        a summary outcome. Where appropriate, it may also include a final offer of redress. Such letters 
                        will be marked clearly as the final response and will include details on how to contact the FOS 
                        if the complaint has not been resolved to the complainant’s satisfaction or, if the offer of redress 
                        is considered insufficient or inappropriate. QuickRemit Limited will send its final response within 
                        15 business days (or 35 business days in exceptional circumstances) after the day in which the PSD 
                        complaint was received or by the end of 8 weeks after the receipt of a non-PSD complaint or 4 weeks 
                        of rejection of offer of redress (where applicable). This may not always be possible as sometimes 
                        the complexity of the complaint may require more time to investigate fully. We will always abide 
                        by regulatory guidelines in relation to a complaint and as such, we will always ensure that complainants 
                        are kept informed about their complaint and our activities in response to their complaint.
                    </p>
                </div>
                
                <div className="py-4">
                    <h2 className="font-semibold text-xl py-2">Monitoring Of Complaints</h2>
                    <p>
                        If, after contacting all parties the complainant remains dissatisfied with the outcome of the complaint 
                        then they may seek redress through the FOS and ultimately the courts if they so wish. In each instance, 
                        we would record upon the complaint file what advice was provided and we would reclassify the complaint 
                        to note that it has been ‘Investigated but not resolved’.
                    </p>
                </div>
            </div>
        </>
    )
}

export const ComplaintsProcedures = () => {
    return (
        <>
            <Layout>
                <HeroView />

                <PageView />
            </Layout>
        </>
    )
}