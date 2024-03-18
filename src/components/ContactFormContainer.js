import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const REACT_APP_MAILCHIMP_U = '59a85f4a3de5e0e8fd944d389'
const REACT_APP_MAILCHIMP_ID = 'f4207bfdea'

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        description &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
            MERGE3: description,
        });
    }

    useEffect(() => {
        if(status === "success") clearFields();
    }, [status])
    
    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setDescription('');
    }

    return (
        <>
            <div className="">
                {status === "sending" && (
                    <div className="text-blue-600 font-semibold">
                        sending...
                    </div>
                )}
                {status === "error" && (
                    <div 
                        className="text-red-600 font-semibold"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === "success" && (
                    <div className="text-green-600 font-semibold">
                        Thanks For Contacting Us
                    </div>
                )}
                <form action="#" onSubmit={e => handleSubmit(e)}>

                    <div className="w-full py-3">
                        <label className="pb-2 text-gray-500">First Name</label>
                        <input
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            placeholder="Jane"
                            required 
                            type="text" name="first_name" 
                            className="block border w-full rounded py-2 px-3 border-blue-400 focus:outline-none" 
                        />
                    </div>

                    <div className="w-full py-3">
                        <label className="pb-2 text-gray-500">Last Name</label>
                        <input 
                            onChange={ e => setLastName(e.target.value) }
                            value={lastName}
                            placeholder="Doe" 
                            required 
                            type="text" name="last_name" 
                            className="block border w-full rounded py-2 px-3 border-blue-400 focus:outline-none" 
                        />
                    </div>

                    <div className="w-full py-3">
                        <label className="pb-2 text-gray-500">Email</label>
                        <input 
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            placeholder="your@email.com" 
                            required type="email" 
                            name="email_address" 
                            className="block border w-full rounded py-2 px-3 border-blue-400 focus:outline-none" 
                        />
                    </div>

                    <div className="w-full py-3">
                        <label className="pb-2 text-gray-500">Message</label>
                        <textarea
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            rows="5"
                            placeholder="Your Email"
                            className="w-full border border-blue-400 rounded p-3 text-gray-800 outline-none focus-visible:shadow-none focus:border-primary "
                            name="email"
                            id="message"
                        ></textarea>
                    </div>
                    
                    <div className="w-full py-4 pt-6">
                        <button type="submit" className="w-full text-white font-semibold bg-primary border border-transparent rounded-sm py-2 px-4 flex items-center justify-center text-base focus:outline-none">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export const ContactFormContainer = props => {

    const postUrl = `https://quickremiltd.us12.list-manage.com/subscribe/post?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};
