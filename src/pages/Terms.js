import React from 'react'
import { Layout } from '../layouts/Index'
import TermsHero from '../assets/img/Terms.png'

const HeroView = () => {
    return (
        <>
            <div className="relative py-16 pt-24 md:pt-40 px-4 md:px-12">
                <div className="w-24 h-24 absolute left-48 top-12" style={{ backgroundColor: '#EA202A', filter: 'blur(50px)' }}></div>
                <div className="hidden md:flex w-48 h-48 absolute right-10 top-48" style={{ backgroundColor: '#0095DA', filter: 'blur(50px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-12" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-20 h-20 absolute right-1/2 top-72" style={{ backgroundColor: '#0095DA', filter: 'blur(60px)' }}></div>
                <div className="w-full max-w-xl pb-4 relative z-5">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-loose tracking-wider">
                        Terms and Conditions
                    </h2>
                </div>
                <img src={TermsHero} alt="Terms and Condition" className="relative z-5" />
            </div>
        </>
    )
}

const TermsAndConditions = () => {
    return (
        <div className="px-4 md:px-12 pb-24">
            <p><strong>1. THE FOLLOWING DEFINITIONS APPLY TO THIS AGREEMENT, HEREINAFTER REFERRED TO AS THE &ldquo;USER AGREEMENT&rdquo;</strong>.</p>
            <p>1.1. These terms and conditions (&ldquo;Terms and Conditions&rdquo;) govern the terms under which you may access and use the website (and for these Terms and Conditions &ldquo;website&rdquo; will include our App (where applicable) and the services associated with it (together, the &ldquo;Service&rdquo;). By accessing, registering with and using the Service, you agree to be bound by the terms of the Terms and Conditions. If you do not wish to be bound by the Terms and Conditions do not access, register with or use the Service. The language of these Terms and Conditions is English and all Services, instructions and transactions carried out in connection with it shall be in English.</p>
            <p><br /></p>
            <p>1.2. In these Terms and Conditions, the terms &ldquo;QuickRemit&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, and &ldquo;our&rdquo; refer to QuickRemit Limited, together with its employees, directors, affiliates, successors, and assigns. QuickRemit Limited is a company registered number 11141043 in England and Wales, with its registered office at 6th Floor, First Central 200 2 Lakeside Drive, Park Royal, London, England, NW10 7FQ.&nbsp;</p>
            <p><br /></p>
            <p>1.3. The terms &ldquo;you&rdquo; and &ldquo;your&rdquo; refer to users of the Service, as Senders, Recipients, other users or visitors to the website.</p>
            <p><br /></p>
            <p>1.4. These Terms and Conditions are effective from the date on which you first access, register or use the Service. The Terms and Conditions may change from time to time, but changes will only be effective 2 months from the date they are first notified to you and will not change the terms on which you previously used the Service.</p>
            <p><br /></p>
            <p>1.5. The Service was created: (a) to assist customers to send money to their family and friends globally in countries where we may offer our services (b) to offer other services in line with our remittance service. For security reasons, we recommend that you only send money through the Service to people you know personally. You must not use the Service to send money to strangers, for example sellers of goods and/or services, whether private or retail.</p>
            <p><strong>2.</strong> <strong>DEFINITIONS IN THESE TERMS AND CONDITIONS:</strong></p>
            <p>&bull; &ldquo;App&rdquo; means QuickRemit&rsquo;s mobile application for the sending of Payment Requests and/or Transaction Requests</p>
            <p><br /></p>
            <p>&bull; &ldquo;Business Day&rdquo; means any day on which we are open for business for the execution of Transaction Requests and/or Payment Requests.</p>
            <p>&ldquo;Destination Country&rdquo; means the country in which the Payee receives money through the Service.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Instruction&rdquo; means a Payment Request and/or a Transaction Request.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Local Taxes&rdquo; means any taxes or charges payable in the Destination Country.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Payee&rdquo; means someone who receives money through the Service</p>
            <p><br /></p>
            <p>&bull; &ldquo;Payment Instrument&rdquo; means a valid instrument of payment such as a bank account, debit card or credit card.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Payment Request&rdquo; means a specific instruction from you to a Sender requesting a Transaction.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Payout Amount&rdquo; means the amount paid out, after any foreign exchange conversion, to the Payee&rsquo;s account exclusive of the Service Fee.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Prohibited&rdquo; means activities which involve narcotics, steroids, pharmaceuticals, chemicals, drug paraphernalia, tobacco, seeds, plants, animals, military or semi-military goods or services, weapons (including dual-use goods), adult services or content, bitcoin or other cryptocurrency, binary options or gambling services or any other activities that are prohibited by QuickRemit&rsquo;s policies as amended from time to time.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Recipient&rdquo; means:</p>
            <p><br /></p>
            <p>(a) a Payee; or</p>
            <p>(b) if you are using the Service to send a Payment Request, someone who receives the Payment Request.</p>
            <p>&bull; &ldquo;Sender&rdquo; means someone who uses the Service to send money.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Service Fee&rdquo; means QuickRemit&rsquo;s fee plus any additional charges or Local Taxes applicable to each Transaction, which QuickRemit may charge in its sole discretion in accordance with applicable laws, as may be described on the QuickRemit website from time to time.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Service Provider&rdquo; means a local bank, money exchange house, or other third-party service providers (e.g. mobile network operators) in the Destination Country with whom QuickRemit works to provide the Service.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Transaction&rdquo; means the transfer of money through the Service.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Transaction Amount&rdquo; means the amount of money that the Sender wishes to send to the Payee as a Transaction, excluding any applicable Service Fee and prior to any foreign exchange conversion.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Transaction History&rdquo; means the record of your Transactions on our website which you may access using your email and password registration details.</p>
            <p><br /></p>
            <p>&bull; &ldquo;Transaction Request&rdquo; means a specific instruction from you requesting us to send money to a Payee through the Service.</p>
            <p><strong>3. OUR OBLIGATIONS</strong></p>
            <p>3.1. Subject to these Terms and Conditions, we agree to provide the Service to you using reasonable care. You acknowledge that the Service may not be available, in whole or in part, in certain regions, countries, or jurisdictions.</p>
            <p><br /></p>
            <p>3.2. We are not obliged to process any particular Transaction. When you submit a Transaction Request, you are requesting that we process the Transaction on your behalf and consenting to the execution of the Transaction. We may, in our sole discretion, choose whether to accept the offer to process that Transaction. If we decide not to process the Transaction, we will notify you promptly of that decision and repay to you the Transaction Amount received by us, provided that we are not prohibited by law from doing so. If we choose to proceed with the Transaction we may still suspend or cancel it in our discretion.</p>
            <p><br /></p>
            <p>3.3. QuickRemit reserves the right to modify or discontinue the Service or any part of the Service without notice, at any time and from time to time.</p>
            <p><br /></p>
            <p>3.4. We may, in our absolute discretion, refuse any Transaction Request (as further detailed in clause 5) or impose limits on the Transaction Amount. We may do so either on a per Transaction basis or on an aggregate basis, and either in respect of one set of registration details or one Payment Instrument or on related sets of registration details or Payment Instruments.</p>
            <p><br /></p>
            <p>3.5. Delivery times quoted on our service levels or elsewhere on our website are representative for the &ldquo;normal&rdquo; / average service and are not a guarantee of an individual Service or Transaction time.</p>
            <p><br /></p>
            <p>3.6. We will attempt to process Transactions promptly, but any Transaction may be delayed or cancelled for a number of reasons including but not limited to: our efforts to verify your identity; to validate your Transaction instructions; to contact you; or due to variations in business hours and currency availability; or otherwise to comply with applicable law.</p>
            <p><br /></p>
            <p>3.7. We may send and receive notifications in relation to Transactions by email and SMS. We will provide you with information after receipt of a Transaction Request enabling you to identify the Transaction, along with details of the amount of the Transaction in the currency used in the Transaction Request, our Service Fee, exchange rate and the date on which the Transaction Request was received.</p>
            <p><br /></p>
            <p>3.8. For the purpose of the Payment Services Regulations 2017, the following fields either in totality or a subset thereof can be unique identifiers:</p>
            <p><br /></p>
            <p>3.9. Mobile Top Up/money &ndash; A number of countries around the world have chosen to apply local taxes to incoming Airtime Top Ups and mobile wallets. When sending to a Recipient in these countries the corresponding deduction will be made from the Transaction Amount. Meaning the Recipient will get a lower amount of Airtime Top Up/Mobile Money.</p>
            <p><br /></p>
            <p>Bank Transfers</p>
            <p>Bank Name</p>
            <p>Account Number</p>
            <p>Bank Code</p>
            <p>Branch Code</p>
            <p>IBAN</p>
            <p>BIC (or SWIFT)</p>
            <p>Account Type</p>
            <p>Payee Full Name</p>
            <p>Mobile Money</p>
            <p>Mobile Money Account Number</p>
            <p><br /></p>
            <p>3.10. In the event you have provided us with an incorrect unique identifier in respect of a Transaction which falls under the Payment Services Regulations 2017 and your Transaction has been misdirected, you may make a written request for the full details of the Payee by contacting us using one of the channels listed at the end of these Terms and Conditions and we will provide you with such details to the extent required and permitted by law.</p>
            <p><strong>4. YOUR OBLIGATIONS</strong></p>
            <p>4.1. You agree that:</p>
            <p>a. you will not access, use or attempt to use the Service to provide any Instructions unless you are at least 18 years old, and that you have the legal capacity to form a binding legal contract in any relevant jurisdiction;</p>
            <p>b. for each Transaction Request that you submit, you will pay us the Service Fee in addition to the Transaction Amount. Payment becomes due at the time that you submit your Transaction Request. To the maximum extent permitted by law, the Service Fee is non-refundable unless expressly stated in these Terms and Conditions. If you submit a Transaction Request that results in QuickRemit becoming liable for charges including but not limited to chargeback or other fees, you agree to reimburse us for all such fees;</p>
            <p>c. we may apply a convenience fee for processing credit cards in certain jurisdictions at our discretion;</p>
            <p>d. you will not use any device, software or routine to interfere or attempt to interfere with the proper working of the Service or any Instruction being conducted through the Service;</p>
            <p><br /></p>
            <p>e. in connection with your registration and use of the Service, you will:</p>
            <p><br /></p>
            <p>a. provide us with true, accurate, current and complete evidence of your identity, and promptly update your personal information if it changes;</p>
            <p>b. provide us with any identity documentations as may be requested by us;</p>
            <p>c. provide us with details of one or more Payment Instruments;</p>
            <p>d. provide us with true, accurate, current and complete information as we indicate on the website is required to receive the Service and any other information which may be required in relation to the Recipient;</p>
            <p>e. provide us with:</p>
            <p>i. any other information that must be provided for a Transaction Request to be properly executed, as specified when you enter the details of the Transaction you are interested in on our website; and</p>
            <p>ii. such information relating to the Transaction as detailed in clause 5.4.</p>
            <p>4.2. We do not accept any liability for loss or damages to you or any third party resulting from non-payment or delay in payment of a Payout Amount to a Payee or failure to perform an Instruction under the Service if you are in breach of your obligations listed in clause 4.1.</p>
            <p><br /></p>
            <p>4.3. When you are using the Service under these Terms and Conditions, it is your responsibility to make sure all the details are accurate before submission. Once a Transaction Request has been received it is not normally possible to change any details of that Transaction Request. You will be given the opportunity to confirm Transaction Requests before submission and you must check the details carefully.</p>
            <p><br /></p>
            <p>4.4. The total amount (the Transaction Amount, Service Fee and other applicable fees and charges) that you will be required to pay and the relevant exchange rate will be displayed clearly on the website before you are asked to confirm your Transaction and proceeding with the Transaction at this point is entirely optional.</p>
            <p><br /></p>
            <p>4.5. When you pay a Transaction Amount in one currency and the Payout Amount is in another currency, there will be a difference between the exchange rate at which we buy foreign currency and the exchange rate provided to you. QuickRemit and its Service Providers usually make a small profit in these circumstances. We guarantee you the Payout Amount in local currency. The margin taken on foreign currency exchange covers our risk in guaranteeing this. If a Payee&rsquo;s account is denominated in a currency other than the currency you instructed us to make payment in there may be delays, additional charges or different exchange rates. The Sender is therefore responsible for ensuring that the currency requested for the Transaction matches the currency of the account where the funds are to be delivered.</p>
            <p><br /></p>
            <p>4.6. QuickRemit will have no responsibility for any fees or charges you may incur by the use of a particular Payment Instrument to fund a Transaction. These may include but are not limited to unauthorised overdraft fees imposed by banks if there are insufficient funds in your bank account or &ldquo;cash advance&rdquo; fees and additional interest which may be imposed by credit card providers if they treat use of the Service as a cash transaction rather than a purchase transaction.</p>
            <p><br /></p>
            <p>4.7. You will only use the Service to send money to people that you know personally and not to pay for goods or services from third parties you do not know and trust. You acknowledge that QuickRemit may refuse to process your Transaction Request where we believe you are using the Service to purchase goods or services from third parties you do not know and trust or where we believe that the Service is being used, by you or the Recipient, in furtherance of fraudulent, illegal or Prohibited activities. If you choose to pay third parties for goods and services using the Service, you acknowledge that QuickRemit has no control over, and is not responsible for, the quality, safety, legality, or delivery of such goods or services and that any such use of the Service is entirely at your own risk.</p>
            <p><br /></p>
            <p>4.8. Both you and the Recipient will only act on your own behalf. You may not submit an Instruction on behalf of a third person. If you intend to submit an Instruction on behalf of a third person, you must first inform QuickRemit of your desire to do so and provide us with any additional information about the third person we may request in order that we may decide whether to permit the Instruction.</p>
            <p><br /></p>
            <p>4.9. In using the Service you will comply with these Terms and Conditions as well as any applicable laws, rules or regulations. It is a breach of these Terms and Conditions to use the Service to send Transaction Amounts: (i) to a Payee who has violated the Terms and Conditions, or (ii) in connection with illegal activity including but not limited to money-laundering, fraud and the funding of terrorist organisations. If QuickRemit reasonably believes you are using the Service in connection with illegal activity or for any fraudulent purpose, or are permitting a third party to do so, QuickRemit may report you to the appropriate legal authorities.</p>
            <p><br /></p>
            <p>4.10. When using our website or the Service or when interacting with QuickRemit, with another user or with a third party, you will not:</p>
            <p><br /></p>
            <p>a. breach these Terms and Conditions, or any other agreement between you and QuickRemit;</p>
            <p>b. create more than one registration without our prior written permission;</p>
            <p>c. provide false, inaccurate, or misleading information;</p>
            <p>d. allow anyone else access to your registration details, and you will keep those details safe and secure;</p>
            <p>e. refuse to provide confirmation of any information you provide to us, including proof of identity, or refuse to co-operate in any investigation;</p>
            <p>f. use an anonymising proxy (a tool that attempts to make activity untraceable); or</p>
            <p>g. copy or monitor our website using any robot, spider, or other automatic device or manual process, without our prior written permission.</p>
            <p><br /></p>
            <p>4.11. You acknowledge that nothing in these Terms and Conditions or in any other information provided by QuickRemit as part of the Service is intended to be, nor should it be construed to be, legal or other advice. If required, you agree to consult your own professional advisers as to the effects of English or foreign laws which may apply to the Service.</p>
            <p><strong>5. OUR RIGHT TO REFUSE, SUSPEND OR CANCEL</strong></p>
            <p>5.1. We may refuse any Transaction Request, Payment Request or Transaction at any time for any reason (or cancel it where relevant). Notwithstanding this, we set out here some examples of when that may occur.</p>
            <p><br /></p>
            <p>a. We may, in our absolute discretion, refuse or cancel Transaction Requests or Transactions where we believe that the Service is being used, whether by you or the Recipient, in furtherance of illegal, fraudulent or Prohibited activities.</p>
            <p><br /></p>
            <p>b. We may, in our absolute discretion, refuse or cancel Transaction Requests or Transactions from certain Senders or to certain Payees, including but not limited to entities and individuals on restricted or prohibited lists issued from time to time by any government authorities, if we are required to do so by law, or where we have reason to believe processing the Transaction Requests would violate anti-money laundering or counter-terrorism financing laws and regulations. We may refuse to process a Transaction funded from certain Payment Instruments where we have reason to believe the security of the Payment Instrument has been compromised or where we suspect the unauthorised or fraudulent use of the Payment Instrument.</p>
            <p><br /></p>
            <p>c. We may, in our absolute discretion, refuse or cancel Transaction Requests or Transactions if QuickRemit believes you are using the Service to purchase goods or services from third parties you do not know or trust.</p>
            <p><br /></p>
            <p>d. We may, in our absolute discretion, refuse or cancel Transaction Requests, Payment Requests or Transactions if:</p>
            <p><br /></p>
            <p>a. QuickRemit is unable to verify your identity;</p>
            <p>b. You do not comply with information requests pursuant to clause 5.4; or</p>
            <p>c. QuickRemit reasonably believes you are using the Service, or allowing it to be used, in breach of these Terms and Conditions or any applicable laws, rules or regulations.</p>
            <p><br /></p>
            <p>5.2. Where QuickRemit has refused or cancelled a Transaction Request, Transaction or Payment Request, QuickRemit may also, at its discretion, temporarily or permanently suspend your Registration.</p>
            <p><br /></p>
            <p>5.3. Where QuickRemit temporarily or permanently suspends your Registration, or refuses or cancels a Transaction Request, Payment Requestor a Transaction in accordance with this clause 5, QuickRemit shall be entitled to retain any Service Fees already incurred.</p>
            <p><br /></p>
            <p>5.4. In order to comply with our obligations under relevant laws, we reserve the right to ask for further information or evidence relating to the purpose of a Transaction.</p>
            <p><strong>6. YOUR RIGHT TO CANCEL; REFUNDS</strong></p>
            <p>6.1. To the extent permitted by law, once we have received your Instruction, you do not have the automatic right to revoke it</p>
            <p>.</p>
            <p>6.2. Notwithstanding clause 6.1 above, QuickRemit may, in its absolute discretion, or shall if required by law, attempt to cancel or recall your Instruction if you have informed us that you wish to revoke it. In some cases, QuickRemit may have initiated an irreversible request for funds to be paid out to your Payee by a Service Provider and therefore cannot guarantee cancellation will be successful. For successful revocations QuickRemit will normally refund your money, less any reasonable revocation, recall or tracing charges and any Service Fees already charged, within five (5) Business Days.</p>
            <p><br /></p>
            <p>6.3. If you:</p>
            <p>a. have any problems using the Service; or</p>
            <p>b. are aware of any unauthorised or incorrectly executed Transactions;</p>
            <p>you should contact us through the channels listed at the end of these Terms and Conditions without delay and in any event no later than 13 months after the date the Transaction Amount was debited, upon becoming aware of the unauthorised or incorrectly executed Transaction. A request for a refund must be submitted in writing (including by email) to one of the contact points listed at the bottom of these Terms and Conditions, giving the Sender&rsquo;s full name, address, and phone number, together with the Transaction tracking number, Transaction Amount, and the reason for your refund request.</p>
            <p>6.4. If we have executed the Transaction in accordance with the instructions you have provided to us, and that information proves to have been incorrect, we are not liable for the incorrect execution of the Transaction. We will however make reasonable efforts to recover the funds. We may charge you a reasonable fee, reflective of our efforts, to do so.</p>
            <p><br /></p>
            <p>6.5. Where QuickRemit has executed the Transaction otherwise than in accordance with your Instruction, subject to clause 11.2, QuickRemit will refund the full amount debited. Unless there are exceptional circumstances, no adjustment will be made for any currency fluctuations which may have occurred between the time you pay us the Transaction Amount and the time of credit.</p>
            <p><br /></p>
            <p>6.6. Any refunds will be credited back to the same Payment Instrument used to fund the Transaction and in the same currency</p>
            <p><strong>7. PAYMENT REQUEST</strong></p>
            <p>7.1. You agree that you will not send Payment Requests to strangers i.e. people you do not know personally.</p>
            <p><br /></p>
            <p>7.2. You acknowledge that the Service may not be available, in whole or in part, in certain regions, countries, or jurisdictions.</p>
            <p><br /></p>
            <p>7.3. We are not obliged to process any Payment Request. When you submit a Payment Request, you are requesting that we process the Payment Request on your behalf. and consenting to us contacting the Recipient if we need to for these purposes. A SMS text message will be sent to the Sender that can be forwarded to the recipient at the sender&rsquo;s discretion. We may, in our sole discretion, choose whether to process that Payment Request, or impose limits on Payment Requests. In particular, we may, in our absolute discretion, refuse Payment Requests and/or suspend or cancel your account with us where (i) you are in breach of clause 4, (ii) we believe that the Service is being used, whether by you, the Sender or the Recipient in furtherance of illegal, fraudulent or Prohibited activities, or (iii) we are required to do so by law (including applicable anti-money laundering and counter-terrorism legislation) or (iv) we are unable to verify either your identity or that of the Recipient.</p>
            <p><br /></p>
            <p>7.4. All Transactions that result from a Payment Request will be handled in accordance with these Terms and Conditions, which the Sender will need to accept prior to any Transaction proceeding.</p>
            <p><br /></p>
            <p>7.5. Cancellation of Payment Requests. Once we have received your Payment Request, you may not cancel it. In such circumstances you would need to contact the Sender separately and explain that you require the Payment Request to be treated as cancelled. Please therefore ensure that your Payment Requests are legitimate, accurate and complete.</p>
            <p><br /></p>
            <p>7.6. Cancellation of Transactions. The cancellation of Transactions shall be governed by and dealt in accordance with these Terms and Conditions. You shall assist and co-operate with us in relation to all cancellation requests we receive from Senders after a Transaction has been initiated following your Payment Request. You shall, upon request from us, promptly refund to us or a third party of our choice (including the Sender) all monies you receive from Transactions where we reasonably believe that such Transactions have resulted from your use of the Services in contravention of these Terms and Conditions.</p>
            <p><strong>8. COLLECTION OF INFORMATION</strong></p>
            <p>8.1. Customer Identification Program. English law requires all financial institutions to assist in the fight against money laundering activities and the funding of terrorism by obtaining, verifying, and recording identifying information about all customers. We may therefore require you to supply us with personal identifying information relating to you and the Recipient and we may also legally consult other sources to obtain information about you and the Recipient.</p>
            <p><br /></p>
            <p>8.2. Verification and Checks. We will verify your residential address and personal details to confirm your identity. We may also pass your personal information to a credit reference agency, which may keep a record of that information. Be assured that this is done only to confirm your identity, and that we do not perform credit checks and therefore your credit rating will be unaffected. We may also need to verify the identity of a Recipient in the same way. All information provided by you will be treated securely and strictly in accordance with the Data Protection Act 1998. By accepting these Terms and Conditions you authorise us to make any inquiries we consider necessary to validate the information that you provide to us. We may do this directly, for example by asking you for additional information, or requiring you to take steps to confirm ownership of your Payment Instruments or email address; or indirectly, for example by verifying your information against third party databases or through other sources.</p>
            <p><br /></p>
            <p>8.3. Data Privacy Policy. You consent to our processing your personal information for the purposes of providing the Service, including for verification purposes as set out in this clause. You also consent to the use of such data to enable us and our authorised third parties to communicate with you, and for statutory, accounting and archival purposes, in accordance with the terms of QuickRemit&rsquo;s Privacy Policy. You acknowledge that you have read and consented to QuickRemit&rsquo;s Privacy Policy. The Privacy Policy can be found by clicking here.</p>
            <p><br /></p>
            <p>8.4. Government Disclosures. We may be required by law to provide information about you, your use of the Service and your Instructions to government or other competent authorities as described in our Data Privacy Policy. You acknowledge and consent to us doing this.</p>
            <p><br /></p>
            <p>8.5. QuickRemit may, as necessary in providing the Service, store all information required of a Recipient to prove his or her identity or associated with their specific Instruction. Such proofs may include a suitable form of valid, unexpired identification from a list of acceptable papers provided by the Service Provider, and/or a transaction tracking number, a personal identification number (PIN), a &ldquo;password&rdquo;, a &ldquo;secret word&rdquo;, or other similar identifiers.</p>
            <p><strong>9. </strong><strong>INTELLECTUAL PROPERTY</strong></p>
            <p>9.1. The QuickRemit website and the QuickRemit App, the content, and all intellectual property relating to them and contained in them (including but not limited to copyrights, patents, database rights, trademarks and service marks) are owned by us, our affiliates, or third parties. All right, title and interest in and to the Quickemit website and the Service shall remain our property and/or the property of such other third parties.</p>
            <p><br /></p>
            <p>9.2. The QuickRemit website and the QuickRemit Service may be used only for the purposes permitted by these Terms and Conditions or described on the website. You are authorised solely to view and to retain a copy of the pages of the QuickRemit website for your own personal use. You may not duplicate, publish, modify, create derivative works from, participate in the transfer or sale of, post on the internet, or in any way distribute or exploit the QuickRemit website, the QuickRemit Service or any portion thereof for any public or commercial use without our express written permission. You may not: (a) use any robot, spider, scraper or other automated device to access the QuickRemit website or the QuickRemit Service; and/or (b) remove or alter any copyright, trademark or other proprietary notice or legend displayed on the QuickRemit website (or printed pages of the website). The name &ldquo;QuickRemit&rdquo; and other names and indicia of ownership of QuickRemit&rsquo;s products and/or services referred to on the QuickRemit website are our exclusive marks or the exclusive marks of other third parties. Other products, services and company names appearing on the website may be trademarks of their respective owners, and therefore you should not use, copy or reproduce them in any way.</p>
            <p><strong>10. WARRANTIES AND LIABILITY</strong></p>
            <p>10.1. Where we have materially breached these Terms and Conditions causing a Sender loss, we will refund the Sender the Transaction Amount and the Service Fee.</p>
            <p><br /></p>
            <p>10.2. If a Transaction is delayed or fails, or if an executed Transaction is not authorised, you may have a right to receive a refund or compensation under laws relating to the provision of international money transfer services. In the case of any unauthorised or incorrectly executed Transaction, any such right may be prejudiced if you do not notify us of the unauthorised or incorrectly executed Transaction without delay, or in any event within thirteen months after the debit date. We will provide you with the further details of your rights to a refund or compensation if you contact us using the contact details at the end of these Terms and Conditions.</p>
            <p><br /></p>
            <p>10.3. Any claim for compensation made by you must be supported by any available relevant documentation.</p>
            <p><br /></p>
            <p>10.4. We do not, in any event, accept responsibility for:</p>
            <p><br /></p>
            <p>a. any failure to perform the Service (e.g. your Instruction) as a result of circumstances which could reasonably be due to abnormal and unforeseen circumstances or outside our control or due to our obligations under any applicable laws, rules or regulations;</p>
            <p>b. malfunctions in communications facilities which cannot reasonably be under our control and that may affect the accuracy or timeliness of messages you send to us;</p>
            <p>c. any losses or delays in transmission of messages arising out of the use of any internet or telecommunications service provider or caused by any browser or other software which is not under our control; or</p>
            <p>d. errors on the website or with the Service caused by incomplete or incorrect information provided to us by you or a third party.</p>
            <p>10.5. Nothing in this clause 11 shall (a) exclude or limit liability on our part for death or personal injury resulting from our negligence; or (b) exclude our liability for fraud.</p>
            <p>10.6. Where you are sending a Transaction Amount to a Payee who is not registered with us, you agree to accept the provisions of this clause 11 not only for yourself, but also on behalf of the Payee.</p>
            <p>10.7. Your relationship is with QuickRemit only. You agree that no affiliate or agent of QuickRemit owes you any duty of care when performing a task which would otherwise have to be performed by QuickRemit under its agreement with you.</p>
            <p>10.8. You understand and acknowledge that you are liable for all losses incurred in respect of an unauthorised Transaction or Instruction or any other unauthorised use of the Service, where you have acted fraudulently or negligently and you agree to be responsible for and hold harmless QuickRemit, our subsidiaries, affiliates, officers, directors, employees, independent contractors, advertisers, partners, and co-branders from all loss, damage, claims, actions or demands, including reasonable legal fees, arising out of your use or misuse of the website or Service, all activities that occur under your password or account e- mail login, your violation of these Terms and Conditions or any other violation of the rights of another person or party.</p>
            <p><strong>11. USE OF THE QUICKREMIT APP</strong></p>
            <p>11.1. In consideration of you agreeing to abide by these Terms and Conditions, we grant you a non-transferable, non-exclusive licence to use the App, subject to these Terms and Conditions, our Privacy Policy and the applicable app-store terms (incorporated into these Terms and Conditions by reference) as may be amended from time to time. We reserve all other rights.</p>
            <p><br /></p>
            <p>11.2. Except as expressly set out in these Terms and Conditions or as permitted by any local law, you agree:</p>
            <p><br /></p>
            <p>a. not to copy the App (except where such copying is incidental to normal use of the App, or where it is necessary for back-up or operational security); and</p>
            <p><br /></p>
            <p>b. not to rent, lease, sub-license, loan, alter, translate, merge, adapt, vary or modify the App.</p>
            <p><br /></p>
            <p>11.3. You acknowledge that the App has not been developed to meet your individual requirements, and that it is therefore your responsibility to ensure that the facilities and functions of the App meet your requirements.</p>
            <p><br /></p>
            <p>11.4. We only supply the App for domestic and private use. You agree not to use the App for any commercial, business or resale purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity. Specifically (but without limitation), we do not accept any liability for loss or damages to you or any third party resulting from any delay in us processing an Instruction or refusal by us to execute a Transaction pursuant to these Terms and Conditions.</p>
            <p><br /></p>
            <p>11.5. The App is provided to you free of charge and as a result no representations, conditions, warranties or other terms of any kind are given in respect of the App, and all statutory warranties and conditions are excluded to the fullest extent possible under applicable law.</p>
            <p><br /></p>
            <p>11.6. In relation to your use of the App, we do not, in any event, to the extent permitted by law, accept responsibility for:</p>
            <p><br /></p>
            <p>a. any failure to perform the Services, or any losses or delays in the transmission of messages, due to circumstances outside our control or due to our obligations under any applicable laws, rules or regulations;</p>
            <p>b. malfunctions in communications facilities which cannot reasonably be under our control and that may affect the accuracy or timeliness of messages we send to one another;</p>
            <p>c. errors in the App or with the Service caused by incomplete or incorrect information provided to us by you or a third party; or</p>
            <p>d. any loss or damage you suffered by you as a result of you using our App on a &lsquo;jailbroken&rsquo;, &lsquo;rooted&rsquo; or otherwise modified device.</p>
            <p><strong>12. ELECTRONIC COMMUNICATIONS</strong></p>
            <p>12.1. You acknowledge that these Terms and Conditions shall be entered electronically, and that the following categories of information (&ldquo;Communications&rdquo;) may be provided by electronic means:</p>
            <p><br /></p>
            <p>a. these Terms and Conditions and any amendments, modifications or supplements to it;</p>
            <p>b. your records (e.g. of transactions) through the Service;</p>
            <p>c. any initial, periodic or other disclosures or notices provided in connection with the Service, including without limitation those required by law;</p>
            <p>d. any customer service communications, including without limitation communications with respect to claims of error or unauthorised use of the Service; and</p>
            <p>e. any other communication related to the Service or QuickRemit. The Service does not allow for Communications to be provided in paper format or through other non-electronic means.</p>
            <p><br /></p>
            <p>12.2. You may withdraw your consent to receive Communications electronically, but if you do, your use of the Service shall be terminated. In order to withdraw your consent, you must contact us using our contact information at the end of these Terms and Conditions.</p>
            <p><br /></p>
            <p>12.3. In order to access and retain Communications, you must have or have access to the following:</p>
            <p><br /></p>
            <p>a. An internet browser;</p>
            <p>b. an e-mail account, e-mail software capable of interfacing with QuickRemit&rsquo;s e-mail servers and the capability to read e-mail from QuickRemit, and a device and internet connection capable of supporting the foregoing; and</p>
            <p>c. sufficient electronic storage capacity on your electronic device&rsquo;s hard drive or other data storage unit; or</p>
            <p>d. a printer that is capable of printing from your browser and e-mail software.</p>
            <p>12.4. In addition, you must promptly update us with any change in your email address by updating your profile at https://www.quickremitltd.com.</p>
            <p><strong>13. TERMINATION</strong></p>
            <p>13.1. You may terminate these Terms and Conditions on one month&rsquo;s written notice. We may terminate these Terms and Conditions upon two months&rsquo; notice, except as provided for in clause 13.2.</p>
            <p><br /></p>
            <p>13.2. We may terminate these Terms and Conditions with immediate effect if you:</p>
            <p><br /></p>
            <p>a. become, or we reasonably believe or become aware you are likely to become, insolvent or are declared bankrupt;</p>
            <p><br /></p>
            <p>b. are in breach of any provision of these Terms and Conditions;</p>
            <p>13.2.3;</p>
            <p><br /></p>
            <p>c. use the Service or the website in a way that is disruptive to our other customers, or you do anything which in our opinion is likely to bring us into disrepute;</p>
            <p><br /></p>
            <p>d. through any means of communication intimidate, harass or threaten Quickemit or its employees with violence, property damage or any other offensive, indecent or hateful material;</p>
            <p><br /></p>
            <p>e. breach or attempt to breach the security of the website (including but not limited to: modifying or attempting to modify any information; unauthorised log-ins, unauthorised data access or deletion; interfering with the service, system, host or network; reverse engineering of any kind; spamming; hacking; falsifying data; introducing viruses, Trojan horses, worms or other destructive or damaging programs or engines; or testing security in any way); or</p>
            <p><br /></p>
            <p>f. are, in QuickRemit&rsquo;s reasonable belief, using the Service in connection with fraudulent, illegal or Prohibited activity, or permitting a third party to do so.</p>
            <p><strong>14. EVENTS OUTSIDE OUR CONTROL</strong></p>
            <p>14.1. We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under these Terms that is caused by events outside our reasonable control (Force Majeure Event). A Force Majeure Event includes any act, event, non-occurrence, omission or accident beyond our reasonable control and includes, in particular (without limitation), the following:</p>
            <p><br /></p>
            <p>a. strikes, lock-outs or other industrial action; or</p>
            <p>b. civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether declared or not) or threat or preparation for war;</p>
            <p>c. fire, explosion, storm, flood, earthquake, subsidence, epidemic or other natural disaster;</p>
            <p>d. impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or private transport; or</p>
            <p>e. impossibility of the use of public or private telecommunications networks.</p>
            <p>14.2. Our obligations under these Terms are suspended for the period that the Force Majeure Event continues, and will extend the time to perform these obligations for the duration of that period. We will take reasonable steps to bring the Force Majeure Event to a close or to find a solution by which our obligations under these Terms can be performed despite the Force Majeure Event.</p>
            <p><strong>15. COMPLAINTS</strong></p>
            <p>15.1. If you wish to make a complaint about any aspect of the QuickRemit&rsquo;s service, please send your complaint in writing to the address shown on the Contact Us page of our website or by email support@quickremitltd.com</p>
            <p><br /></p>
            <p>15.2. We will acknowledge receipt of your complaint within 2 Business Days. We will investigate your complaint and come back to you with the results of our investigation no later than 5 Business Days after the receipt of our acknowledgement of your complaint.</p>
            <p><br /></p>
            <p>15.3. If you are not satisfied with the manner in which we have dealt with your complaint, or the outcome, then you may refer the matter to the Financial Ombudsman Service, Exchange Tower, Harbour Square Exchange, London E14 9SR, Tel No 0800 0234 567, Email: complaint.info@financial-ombudsman.org.uk.</p>
            <p><strong>16. GENERAL</strong></p>
            <p>16.1. Governing law: this Agreement will be governed by English law and the parties submit to the exclusive jurisdiction of the English Courts.</p>
            <p><br /></p>
            <p>16.2. No Waiver: The failure of QuickRemit to exercise or enforce any right or provision of the Terms and Conditions shall not constitute a waiver of such right or provision.</p>
            <p><br /></p>
            <p>16.3. Modification: We may modify these Terms and Conditions from time to time without notice to you, except as may be required by law. You can review the most current version of the Terms and Conditions at any time by reviewing the website. You may terminate your use of the Service if you do not agree with any modification or amendment. If you use the Service after the effective date of an amendment or modification, you shall be deemed to have accepted that amendment or modification. You agree that you shall not modify these Terms and Conditions and acknowledge that any attempts by you to modify these Terms and Conditions shall be void.</p>
            <p><br /></p>
            <p>16.4. Entire Agreement: This agreement constitutes the entire agreement between the parties and supersedes all prior understandings or agreements relating to the subject matter of this agreement.</p>
            <p><br /></p>
            <p>16.5. Severability: If any provision of the Terms and Conditions is found by an arbitrator or court of competent jurisdiction to be invalid, the parties nevertheless agree that the arbitrator or court should endeavour to give appropriately valid effect to the intention of the Terms and Conditions as reflected in the provision, and the other provisions of the Terms and Conditions shall remain in full force and effect.</p>
            <p><br /></p>
            <p>16.6. Any external links to third-party websites on the website are provided as a convenience to you. These sites are not controlled by us in any way and we are not responsible for the accuracy, completeness, legality or any other aspect of these other sites including any content provided on them. You access such websites at your own risk.</p>
            <p><strong>SECURITY</strong></p>
            <p>We take security very seriously at QuickRemit and we work hard, using state-of-the-art security measures, to make sure that your information remains secure. The QuickRemit Service is a safe and convenient way to send money to friends and family and to other people that you trust.</p>
            <p>However, we do advise you to consider very carefully before sending money to anyone that you do not know well. In particular, you should be very cautious of deals or offers that seem too good to be true &ndash; they may be scams. If you are aware of anyone or any entity that is using the Service inappropriately, please email us. Similarly, if you receive any emails, purporting to be from QuickRemit, which you suspect may be &ldquo;phishing&rdquo; (fake) emails, please forward the email to us at support@quickremitltd.com</p>
            <p><strong>CONTACT INFORMATION</strong></p>
            <p>Questions, notices, and requests for refunds or further information should be sent to QuickRemit, as follows:</p>
            <p><br /></p>
            <p>online at https://www.quickremitltd.com;</p>
            <p>by email to support@quickremitltd.com</p>
            <p>by telephone at +44 203 9296 209; + 44 (0)781 8513 341</p>
            <p><br /></p>
            <p>by fax at +44 (0)20 xxxx xxxx; or</p>
            <p><br /></p>
            <p>by post to: QuickRemit Customer Services, 6th Floor, First Central 200, 2, Lakeside Drive, Park Royal, London NW10 7FQ</p>
            <p>.</p>  
        </div>
    )
}

export const Terms = () => {
    return (
        <>
            <Layout>
                <HeroView />

                <TermsAndConditions />
            </Layout>
        </>
    )
}