import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { countriesFlagOptions } from '../Data/Contents/CountriesContents';

const REACT_APP_MAILCHIMP_U = '59a85f4a3de5e0e8fd944d389'
const REACT_APP_MAILCHIMP_ID = 'f4207bfdea'

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        country &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
            MERGE4: country,
        });
    }

    useEffect(() => {
        if(status === "success") clearFields();
    }, [status])
    
    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setCountry('');
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
                    <div
                        className="text-green-600 font-semibold"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
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
                        <label className="pb-2 text-gray-500">Country</label>
                        <select 
                            onChange={e => setCountry(e.target.value)}
                            value={country}
                            placeholder="Select your coountry..." 
                            required 
                            className="block border w-full rounded py-2 px-3 border-blue-400 focus:outline-none" 
                        >
                            {
                                countriesFlagOptions.map((country, key) => (
                                    <option key={key} value={country.name}>{country.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    
                    <div className="w-full py-4 pt-6">
                        <button type="submit" className="w-full text-white font-semibold bg-primary border border-transparent rounded-sm py-2 px-4 flex items-center justify-center text-base focus:outline-none">
                            Join the Waiting List
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

const MailchimpFormContainer = props => {

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

export default MailchimpFormContainer;