import React from 'react'
import { Layout } from '../layouts/Index'
import PrivacyPolicyHero from '../assets/img/privacy.png'

const HeroView = () => {
    return (
        <>
            <div className="py-16 pt-24 md:pt-40 px-4 md:px-12 relative z-5">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="hidden md:flex w-48 h-48 absolute right-10 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-72" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-full max-w-xl pb-4 relative z-5">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-loose tracking-wider">
                        Privacy Policy
                    </h2>
                </div>
                <img src={PrivacyPolicyHero} alt="Poliy Banner" className="relative z-5" />
            </div>
        </>
    )
}

const PrivacyPolicyView = () => {
    return (
        <>
            <div className="px-4 md:px-12 pb-24">
                <p><strong>Privacy Notice &ndash; November 2018</strong></p>
                <p><strong>BACKGROUND:</strong></p>
                <p>QuickRemit Limited understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of all of our customers and will only collect and use personal data in ways that are described here, and in a way that is consistent with our obligations and your rights under the law.</p>
                <p><br /></p>
                <p><strong>Contents</strong></p>
                <p>Who We Are. 2</p>
                <p>Definitions. 2</p>
                <p>Information That We Collect 2</p>
                <p>The personal data that we collect: 3</p>
                <p>How we collect information about you: 4</p>
                <p>How We Use Your Personal Data. 4</p>
                <p>Purposes and reasons for processing your personal data are detailed below: &ndash; 5</p>
                <p>Your Rights. 6</p>
                <p>Sharing and Disclosing Your Personal Information. 6</p>
                <p>Safeguarding Measures. 7</p>
                <p>Protecting your Personal Data. 7</p>
                <p>Not Providing Your Data. 8</p>
                <p>How Long We Keep Your Data. 8</p>
                <p>Special Categories Data. 8</p>
                <p><br /></p>
                <p><strong>Who We Are</strong></p>
                <p>QuickRemit Limited is a non-bank financial institution with registration number 11141043 to provide money transfer services to mainly Africans living in the diaspora.</p>
                <p>QuickRemit Limited&rsquo;s registered office is at 6th Floor, First Central 200 2 Lakeside Drive, Park Royal, London, England, NW10 7FQ and we are a company registered in England and Wales under company number 11141043. Our designated Data Protection Officer/Appointed Person is Faisel Mahboob , who can be contacted by e-mail compliance@quickremitltd.com or by post to Data Protection Officer, QuickRemit Limited, 6th Floor, First Central 200, 2, Lakeside Drive, Park Royal, London NW10 7FQ, London</p>
                <p><br /></p>
                <p>This privacy policy explains how QuickRemit Ltd collects and processes your personal information in compliance with the relevant data protection Regulation and laws. This notice also provides you with the necessary information regarding your rights and our obligations, and explains how, why and when we process your personal data.</p>
                <p><br /></p>
                <p><strong>Definitions</strong></p>
                <p>Controller: means a natural or legal person who (either alone, jointly or together with other persons) determines the purpose(s) &ldquo;for which&rdquo; and the manner &ldquo;in which&rdquo; any personal data is, or will be processed;</p>
                <p>Processor: means a natural or legal person (other than an employee of the controller) who processes personal data on behalf of the controller;</p>
                <p>Processing: means any operation or a set of operations which is performed on personal data or on sets of personal data, whether by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</p>
                <p>Data Subject: An individual about whom information is being processed.</p>
                <p>QUICKREMIT LTD is a Data Controller with respect to personal data collected and processed during business operations. QuickRemit Limited, being an owner of website: www.quickremitltd.com is responsible for processing and managing its customer personal data. Therefore, the registered data controller is QuickRemit Limited, 6th Floor, First Central 200, 2, Lakeside Drive, Park Royal, London, NW10 7FQ, registration number: 11141043.</p>
                <p><br /></p>
                <p>&ldquo;Personal data&rdquo; refers to any information which identifies you as an individual directly or indirectly.</p>
                <p>&ldquo;You&rdquo; refers to a website visitor who accesses the website to register or effect a transaction and ones either calling or visiting any of company&rsquo;s branches.</p>
                <p><br /></p>
                <p><strong>Information That We Collect</strong></p>
                <p>QUICKREMIT LTD processes your personal information to meet our legal, statutory and contractual obligations and to provide you with our products and services. We will never collect any unnecessary personal data from you and do not process your information in any way, other than as specified in this notice.</p>
                <p><br /></p>
                <p><strong>The personal data that we collect:</strong></p>
                <p>We may collect, record and use information about You in physical and electronic form and will hold, use and otherwise process the data in accordance with the Data Protection Legislation and as set out in our Privacy Policy.</p>
                <p>The personal data we collect, and process may include, among others:</p>
                <p>&bull; Your name;</p>
                <p>&bull; Your contact information such as Your address and email address and telephone number (or any telephone number used to call our customer services);</p>
                <p>&bull; Your demographic information such as age and gender;</p>
                <p>&bull; Evidence of Your identity (for example passport information);</p>
                <p>&bull; Unique identifiers such as username, account number and password;</p>
                <p>&bull; Your profiles and postings on any other social media applications and services that we provide or that You make available to us;</p>
                <p>&bull; Your payment details or other financial data, e.g.: Your bank or payment method provider&rsquo;s name, or your account number, sort code and billing address; and</p>
                <p>We also collect from you, information in relation to other people (e.g.: details of the recipients of your money transfers), where You provide us with such information. By providing us with such information, you confirm that you have obtained any necessary permissions from such persons to the reasonable use of their information for such purposes in accordance with this notice or are otherwise permitted to give us this information on their behalf. Please also ensure that those other people are aware of this notice and that the provisions of this notice are clearly communicated to them.</p>
                <p>We also collect your Full name and address when you complete a form to contact customer support.</p>
                <p><br /></p>
                <p><strong>How we collect information about you:</strong></p>
                <p>Online registration form.</p>
                <p>Automatic Information: When you visit our website, we collect information via cookies and other techniques. Cookies are small, simple text files that save on your computer or mobile device when you visit our website. We collect the following information:</p>
                <p>Internet Protocol (IP) Address; Browser type and Version; Geolocation; Clicking-behaviour.</p>
                <p>We collect this information for functional and analytical purposes.</p>
                <p>Functional cookies help us to provide you a website that is user-friendly and preserves user session across page requests.</p>
                <p>These cookies record information about choices that you have made and allow us to remember your browser settings, so you can view our website optimally.</p>
                <p>Cookies also help us to identify trusted web traffic.</p>
                <p>Analytical cookies are used to optimize our website&rsquo;s experience. It collects information on your behaviour on our website and enables us to improve how we present our content to you.</p>
                <p>Statistic cookies help us to understand how visitors interact with websites by collecting and reporting information anonymously.</p>
                <p>Commercial cookies are used to promote some of the products how lenders offer to you based on your saved enquiry.</p>
                <p>Marketing cookies: Are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and for advertisers.</p>
                <p>Further details about the cookies we use can be accessed in our Cookie policy. Most browsers automatically accept cookies by default, but you can usually disable cookies or selectively accept cookies by adjusting the preferences in your browser. If you turn off cookies, there may be some features of our site that will not be available to you and some webpages may not display properly.</p>
                <p><br /></p>
                <p><strong>How We Use Your Personal Data</strong></p>
                <p>QUICKREMIT LTD takes your privacy very seriously and will never disclose, share or sell your data without your consent; unless required to do so by law. We only retain your data for as long as is necessary and for the purpose(s) specified in this notice.</p>
                <p>We are committed to protect the security and confidentiality of your personal data. We use appropriate technical and organizational measures in such a manner that processing will meet the requirements of the national and European Union laws (GDPR) and ensure the protection of your rights.</p>
                <p>When you set an account on our website, you would require a username and password to log in. You must keep your username and password secure, and never disclose it to a third party.</p>
                <p>Where you have consented to us providing you with promotional offers and marketing, you are free to withdraw this consent at any time.</p>
                <p>The General Data Protection Regulation (GDPR) requires that specific data protection principles be followed in the handling of personal data. These principles require that personal data must:</p>
                <p>&bull; be accurate;</p>
                <p>&bull; be secure;</p>
                <p>&bull; not be kept longer than is necessary;</p>
                <p>&bull; be adequate, relevant and not excessive;</p>
                <p>&bull; be fair, lawfully and transparently processed;</p>
                <p>&bull; be treated with individuals&rsquo; rights;</p>
                <p>&bull; be processed for limited purposes and not in any manner incompatible with those purposes;</p>
                <p>&bull; and not be transferred to countries without adequate protection.</p>
                <p>If you would like to execute one of your rights please contact QuickRemit Limited. We have one month to respond to your request. Please bear in mind that, as a financial institution and in order to comply with AML/CTF regulatory requirements QuickRemit Limited is obligated to retain your personal data, as well as all your transaction details and any other additional documents, for required period of time. This is for the purpose of preventing, detecting and investigating possible money laundering and terrorist financing. Those requirements overrule the GDPR requirements.</p>
                <p>We have a right to decline a data subject request to execute its right of access or charge a reasonable fee for fulfilling such request if it is excessive or manifestly unfounded.</p>
                <p><br /></p>
                <p>If you think that your GDPR right has been compromised, you have the right to lodge a complaint to the authority &ndash; the Information Commissioner&rsquo;s Office in the United Kingdom &ndash; for further details please visit: https://ico.org.uk/global/contact-us/. You might also contact any national data protection supervisory authority within EU or EFTA countries if you are based outside United Kingdom &ndash; http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080.</p>
                <p>It is important for us, the data we collect and hold on our users are accurate and up to date. Therefore, we have set up processes and tools to help our users maintain their personal details. You can update your details directly through our website (after log on) or you can contact us by phone or email (see Contact page on our website).</p>
                <p>The purposes and reasons for processing your personal data are detailed below: &ndash;</p>
                <p>&bull; Personal identification information: We collect your personal data in form of name, address, email, and mobile number to register you online so that you can make transfers.</p>
                <p>&bull; Bank card details: This information is required to complete the transaction and ensure the electronic transfer of funds to your beneficiaries.</p>
                <p>&bull; We will occasionally send you marketing information where we have assessed that it is beneficial to you as a customer and in our interests. Such information will be non-intrusive and is processed on the grounds of you giving us consent and legitimate interests.</p>
                <p>&bull; to carry out our obligations arising from any contracts entered into between You and us or from applicable law, and to provide You with the services in accordance with our terms and conditions and with this Privacy Policy;</p>
                <p>&bull; to register You with a QuickRemit account;</p>
                <p>&bull; to fulfil Your Transaction Request;</p>
                <p>&bull; to send You confirmations;</p>
                <p>&bull; to notify You about changes to our services;</p>
                <p>&bull; to prevent fraud;</p>
                <p>&bull; to ensure that content from our site is presented in the most effective manner for You and for Your computer;</p>
                <p>&bull; to send You marketing communications, provided that You have given us Your contact details in the course of a sale (or of negotiations for a sale) of our products or services and that you do not decide to opt out from this type of communications, in accordance with Data Protection Legislation (including the European Directive 2002/58/EC and The Privacy and Electronic Communications (EC Directive) Regulations 2003).</p>
                <p><br /></p>
                <p>&bull; to administer our site and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;</p>
                <p>&bull; as part of our efforts to keep our site and our services safe and secure;</p>
                <p>&bull; to measure or understand the effectiveness of advertising we serve to You and others, and to deliver relevant advertising to You;</p>
                <p>&bull; to make suggestions and recommendations to You and other users of our site about services that may interest You or them; and</p>
                <p><br /></p>
                <p><strong>Your Rights</strong></p>
                <p>You have the right to access any personal information that QUICKREMIT LTD processes about you and to request information about: &ndash;</p>
                <p>&bull; What personal data we hold about you</p>
                <p>&bull; The purposes of the processing</p>
                <p>&bull; The categories of personal data concerned</p>
                <p>&bull; The recipients to whom the personal data has/will be disclosed</p>
                <p>&bull; How long we intend to store your personal data for</p>
                <p>&bull; If we did not collect the data directly from you, information about the source</p>
                <p>If you believe that we hold any incomplete or inaccurate data about you, you have the right to ask us to correct and/or complete the information and we will strive to do so as quickly as possible; unless there is a valid reason for not doing so, at which point you will be notified.</p>
                <p>You also have the right to request erasure of your personal data or to restrict processing in accordance with the General Data Protection Regulations (GDPR); as well as to object to any direct marketing from us. Where applicable, you have the right to data portability which means that when You request to have information we hold about you in a format that is machine readable and transferable.</p>
                <p>And you also have the right to be informed about any automated decision-making we may use.</p>
                <p>You have the right to opt out of having your information used for contacting you about our activities. You can opt out of receiving information from us at any time by simply withdrawing consent by changing the communication choices, unsubscribing from our communications or contacting us.</p>
                <p>If we receive a request from you to exercise any of the above rights, we may ask you to verify your identity before acting on the request; this is to ensure that your data is protected and kept secure.</p>
                <p><br /></p>
                <p><strong>Sharing and Disclosing Your Personal Information</strong></p>
                <p>We do not share or disclose any of your personal information without your consent, other than for the purposes specified in this notice or where there is a legal requirement.</p>
                <p>We may work with a network of Partners running local branches and money transfers agents and we share information with them to complete the transactions. We may disclose information to companies, which help us run or improve the running of our business or which help us deliver products and services to you and to banks, credit card companies, credit reference agencies and to organizations in order to comply with legal, regulatory, security and processing requirements, government and foreign government requirements, applicable to us or our Partners or service providers, including but not limited to anti-money laundering laws.</p>
                <p>The information shared is only for purposes of effecting, administering and completing your remittance transactions and your information are not shared with any other parties or for any other reasons.</p>
                <p><br /></p>
                <p><strong>Safeguarding Measures</strong></p>
                <p>QUICKREMIT LTD takes your privacy seriously and takes every reasonable measure and precaution to protect and secure your personal data. We work hard to protect you and your information from unauthorized access, alteration, disclosure or destruction and have several layers of security measures in place, including: &ndash;</p>
                <p>has in place robust security measures such as SSL and strong encryption on our database servers, access, IT authentication, firewalls, anti-virus/malware etc.</p>
                <p>Data that You submit via our site or Mobile App is sent to and stored on secure servers owned by or operated for us within the European Union and EEA. Data may be transfer</p>
                <p>red to, or stored at, a destination outside the European Economic Area (&ldquo;EEA&ldquo;) and may also be processed by staff operating outside the EEA who work for us, or for one of our service providers, related companies, agents or contractors. Such transfers may be made in order to operate the service, improve our site, Mobile App or services, or to assist in our security or fraud protection activities.</p>
                <p>Where recipients are outside the EEA, we ensure that they provide an adequate level of protection for Your personal data or that the transfer is otherwise permitted under applicable Data Protection Legislation, by methods including using standard contractual clauses, binding corporate rules, registration for the Privacy Shield program, or by relying on a relevant adequacy decision by the European Commission or on other legal grounds or conditions, always in accordance with applicable Data Protection Legislation.</p>
                <p>Where we feel it is necessary or appropriate we may seek to rely on Your consent as the legal basis for transferring Your personal data to outside the EEA, however we do not generally do so. Where we do, You may withdraw Your consent at any time.</p>
                <p><br /></p>
                <p><strong>Protecting your Personal Data</strong></p>
                <p>We ensure that there are appropriate technical, physical, electronic, and administrative safeguards in place that comply with applicable government laws and regulations to protect Your personal details from unauthorised access. When You may enter certain information such as a credit card number on our order forms, we encrypt the transmission of that information using reasonable security measures. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it.</p>
                <p>Unfortunately, the transmission of information via the internet (including by email) is not completely secure. Although we will do our best to protect Your personal data, we cannot guarantee the security of Your data transmitted to our site; any transmission is at Your own risk. Once we have received Your information, we will use strict procedures and security features to try to prevent unauthorised access. We also endeavour to restrict Information access to our employees, agents and representatives that need to know it.</p>
                <p><br /></p>
                <p><strong>Not Providing Your Data</strong></p>
                <p>You are not obligated to provide your personal information to QUICKREMIT LTD; however, as this information is required to complete the transactions and serve you efficiently, we would not be able to offer you services without the required information.</p>
                <p><br /></p>
                <p><strong>Legitimate Interests</strong></p>
                <p>As noted in the &lsquo;How We Use Your Personal Data&rsquo; section of this notice, we occasionally process your personal information under the legitimate interests&rsquo; legal basis. Where this is the case, we have carried out a thorough Legitimate Interests&rsquo; Assessment (LIA) to ensure that we have weighed your interests and any risk posed to you against our own interests; ensuring that they are proportionate and appropriate.</p>
                <p>As a money transfer / remittance business; QUICKREMIT LTD applies the principle of the legitimate interests as a basis for processing and sharing your personal data with our associate companies / branches and have identified that our interests as a business are achieved and this includes processing the personal data you submit in form of Name, address, email and mobile phone.</p>
                <p><br /></p>
                <p>Where significant amounts of money are processed, we might also require further information and it might be like identity documents for example Passport, Driving license and a further proof of address. Based on legitimate interest grounds above, we further share your data as an applicant which we might also have to share this information during audits by third parties.</p>
                <p><br /></p>
                <p><strong>How Long We Keep Your Data</strong></p>
                <p>QUICKREMIT LTD only retains your personal information for as long as is necessary and we have strict review and retention policies in place to meet these obligations. We are required under UK tax law to keep your basic personal data (name, address, contact details) for a minimum of 6 years after which time, it will be destroyed. As a policy, we retain records of personal data that we collect for a period of 7 years.</p>
                <p>Where you have consented to us using your details for direct marketing, we will keep such data until you notify us otherwise and/or withdraw your consent.</p>
                <p>Special categories of Data as defined under GDPR include Ethnic background, political opinions, religious and ideological beliefs, trade union membership; biometric and health data.</p>
                <p>QUICKREMIT does not collect such information, we only collect the minimum amount of Data for the purposes of serving our customers.</p>
                <p><br /></p>
                <p><strong>Changes to This Policy</strong></p>
                <p>QuickRemit Limited reserves the right to change the content of this Policy at any time. All changes will be published on this website along with effective from date. In some circumstances, QuickRemit might inform its users on the upcoming changes by email. Please visit this website frequently to view the latest version of Privacy Policy.</p>
            </div> 
        </>
    )
}

export const PrivacyPolicy = () => {
    return (
        <>
            <Layout>
                <HeroView />

                <PrivacyPolicyView />
            </Layout>
        </>
    )
}