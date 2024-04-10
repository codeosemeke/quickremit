import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { converter } from '../services/converter'
import { commonCurrencies } from '../Data/Contents/worldCurrencies'
import { o_O } from '../services/helper'

const deliveryMethodOption = [
    'Virtual Account Wallet (NGN payment option)',
    'Bank transfer (USD / NGN)', 
    'Cash Pickup (USD only)'
];

export const CalculatorForm = () => {
    const [showMethodDropdown, setShowMethodDropdown] = useState(false)
    const [showSenderDropdown, setShowSenderDropdown] = useState(false)
    const [showReceiverDropdown, setShowReceiverDropdown] = useState(false)
    const [rates, setRates] = useState({})
    const [form, setForm] = useState({
        senderAmount: 0,
        senderCurrency: 'GBP',
        receiverAmount: 0,
        receiverCurrency: 'USD',
        delivery_method: null
    })

    const ref = useRef()
    const refSender = useRef()
    const refReceiver = useRef()

    const isNumber = (evt) => {
        evt = (evt) ? evt : window.event;
        let charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            evt.preventDefault();
        } else {
            return true;
        }
    }

    const selectReceiverCurrency = (e, currency) => {
        setForm({...form, receiverCurrency: currency})
        setShowReceiverDropdown(false)
        e.preventDefault()
    }

    const selectSenderCurrency = async(e, currency) => {
        e.preventDefault()
        await getConverterSender(currency)
        setShowSenderDropdown(false)
        setForm({...form, senderCurrency: currency})
        // let [err, data] = await o_O(converter(currency))
        // if(err) return console.log(err)
        // setRates(data.data.rates)
        console.log(rates)
    }

    const selectDeliveryMethod = (e, delivery) => {
        setForm({...form, delivery_method: delivery})
        setShowMethodDropdown(false)
        e.preventDefault()
    }


    const submit = (e) => {
        console.log(form)
        e.preventDefault()
    }

    const getConverter = async(currency='GBP') => {
        let [err, data] = await o_O(converter(currency))
        if(err) return console.log(err)
        setRates(data.data.rates)
    }

    const getConverterSender = async(currency='GBP') => {
        let [err, data] = await o_O(converter(currency))
        if(err) return console.log(err)
        setRates(data.data.rates)
    }

    const calculateConversion = (e) => {
        setForm({...form, senderAmount: e.target.value})
    }
    
    useEffect(() => {
        getConverter()
    }, [])

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (showMethodDropdown && ref.current && !ref.current.contains(e.target)) {
                setShowMethodDropdown(false)
            }
            if (showSenderDropdown && refSender.current && !refSender.current.contains(e.target)) {
                setShowSenderDropdown(false)
            }
            if (showReceiverDropdown && refReceiver.current && !refReceiver.current.contains(e.target)) {
                setShowReceiverDropdown(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showMethodDropdown, showSenderDropdown, showReceiverDropdown])
    return (
        <>
            <div className="my-4 mt-2 z-10 bg-white relative rounded-lg p-6 sm:py-6 sm:p-6 md:p-8 xl:p-12 max-w-lg shadow-lg lg:ml-32">
                <form className="relative" onSubmit={e => submit(e)}>
                    <div className="absolute left-3.5 bottom-24">
                        <svg width="2" height="341" viewBox="0 0 2 341" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.75" y1="-3.27835e-08" x2="0.750015" y2="341" stroke="#C3EBFF" strokeWidth="1.5"/></svg>
                    </div>
                    
                    <div ref={refSender} className="flex relative z-10">
                        <div className="w-3/4 relative bg-white rounded-md border border-blue-100 pt-2">
                            <span className="pl-4 mt-2 uppercase text-gray-400">You Send</span>
                            <input 
                                onKeyPress={e => isNumber(e)}
                                type="text" 
                                id="default-search" 
                                className="block p-2 px-3 w-full text-lg text-gray-500 focus:outline-none rounded-lg" 
                                placeholder="0.00" 
                                required
                                value={form.senderAmount}
                                onChange={e => calculateConversion(e)}
                            />
                        </div>
                        <div className="w-1/4">
                            <div className="relative inline-block w-full pl-1">
                                <div className="h-20">
                                    <button
                                        onClick={() => setShowSenderDropdown(!showSenderDropdown)}  
                                        type="button" 
                                        className="bg-secondary h-full inline-flex justify-center items-center w-full rounded-md border border-blue-100 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none">
                                        <span className="pr-1 text-xl">{form.senderCurrency}</span>
                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16167 2.66167L4.18334 5.68334C4.63834 6.13834 5.37334 6.13834 5.82834 5.68334L8.85 2.66167C9.57334 1.92667 9.06 0.666672 8.02167 0.666672L1.99 0.666672C0.940003 0.666672 0.42667 1.92667 1.16167 2.66167Z" fill="#0095DA"/></svg>
                                    </button>
                                </div>
                                <div className={
                                    `${showSenderDropdown ? 'opacity-100 scale-100 flex' : 'opacity-0 scale-95 hidden'}
                                    transition transform z-50 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white focus:outline-none`
                                } role="menu">
                                    <div className="py-1 text-center w-full" role="none">
                                        { commonCurrencies.map((currency, key) => (
                                            <Link 
                                                to="#" key={key} 
                                                className="text-gray-700 hover:bg-gray-50 block px-4 py-2 text-sm" 
                                                onClick={e => selectSenderCurrency(e, currency)}
                                            >
                                                {currency}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={refReceiver} className="flex py-4 relative">
                        <div className="w-3/4 relative bg-white rounded-md border border-blue-100 pt-2">
                            <span className="pl-4 mt-2 uppercase text-gray-400">Your receiver gets</span>
                            {/* <input
                                onKeyPress={e => isNumber(e)} 
                                type="text" 
                                id="default-search" 
                                className="block p-2 px-3 w-full text-lg text-gray-500 focus:outline-none rounded-lg" 
                                placeholder="0.00" 
                                required
                                value={form.receiverAmount}
                                onChange={e => setForm({...form, receiverAmount: e.target.value})}
                            /> */}
                            <div className="block p-2 px-3 w-full text-lg text-gray-500 focus:outline-none rounded-lg">
                                {`${+(rates[form.receiverCurrency] * parseFloat(form.senderAmount || 0)).toFixed(2) || 0}`}
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="relative inline-block w-full pl-1">
                                <div className="h-20">
                                    <button
                                        onClick={() => setShowReceiverDropdown(!showReceiverDropdown)}  
                                        type="button" 
                                        className="border-blue-200 bg-secondary h-full inline-flex justify-center items-center w-full rounded-md border border-blue-100 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none"
                                    >
                                        <span className="pr-1 text-xl">{form.receiverCurrency}</span>
                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16167 2.66167L4.18334 5.68334C4.63834 6.13834 5.37334 6.13834 5.82834 5.68334L8.85 2.66167C9.57334 1.92667 9.06 0.666672 8.02167 0.666672L1.99 0.666672C0.940003 0.666672 0.42667 1.92667 1.16167 2.66167Z" fill="#0095DA"/></svg>
                                    </button>
                                </div>
                                <div className={
                                    `${showReceiverDropdown ? 'opacity-100 scale-100 flex' : 'opacity-0 scale-95 hidden'}
                                    transition transform z-50 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white focus:outline-none`
                                }>
                                    <div className="py-1 text-center w-full" role="none">
                                        { commonCurrencies.map((currency, key) => (
                                            <Link 
                                                to="#" key={key} 
                                                className="text-gray-700 hover:bg-gray-50 block px-4 py-2 text-sm" 
                                                onClick={e => selectReceiverCurrency(e, currency)}
                                            >
                                                {currency}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={ref} className="flex relative z-1">
                        <div className="w-full relative bg-white rounded-md border border-blue-100 pt-2">
                            <span className="pl-4 mt-2 uppercase text-gray-400">Delivery Method</span>
                            
                            <div className="relative inline-block w-full">
                                <div className="w-full">
                                    <button
                                        onClick={() => setShowMethodDropdown(!showMethodDropdown)} 
                                        type="button" 
                                        className="h-full inline-flex justify-between items-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none">
                                        <span className="pr-1 text-sm md:text-base">{form.delivery_method || 'Choose Delivery Method' }</span>
                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16167 2.66167L4.18334 5.68334C4.63834 6.13834 5.37334 6.13834 5.82834 5.68334L8.85 2.66167C9.57334 1.92667 9.06 0.666672 8.02167 0.666672L1.99 0.666672C0.940003 0.666672 0.42667 1.92667 1.16167 2.66167Z" fill="#0095DA"/></svg>
                                    </button>
                                </div>
                                <div className={
                                    `${showMethodDropdown ? 'opacity-100 scale-100 flex' : 'opacity-0 scale-95 hidden'}
                                    transition transform z-50 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white focus:outline-none`
                                }>
                                    <div className="py-1 w-full" role="none">
                                        {deliveryMethodOption.map((delivery, key) => (
                                            <Link
                                                onClick={e => selectDeliveryMethod(e, delivery)}
                                                to="#" key={key}
                                                className="text-gray-700 hover:bg-gray-50 block px-4 py-2 text-sm w-full"
                                            >
                                                {delivery}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-4 px-2 relative">
                        <dl>
                            <div className="flex items-center py-2">
                                <svg className="z-10 relative" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" fill="#0095DA" stroke="#C3EBFF" strokeWidth="4"/></svg>
                                <dt className="px-3 text-sm md:text-base">{`${+(rates[form.receiverCurrency] * parseFloat(form.senderAmount || 0)).toFixed(2) || 0} ${form.receiverCurrency}`}</dt>
                                <dd className="flex items-center">
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#777777"/></svg>
                                    <Link to="#" className="px-2 text-sm md:text-base">Guaranteed Exchange rates</Link>
                                </dd>
                            </div>
                            <div className="flex items-center py-2">
                                <svg className="z-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" fill="#0095DA" stroke="#C3EBFF" strokeWidth="4"/></svg>
                                <dt className="px-3">0.00 GBP</dt>
                                <dd className="flex items-center">
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#777777"/></svg>
                                    <span className="px-2 text-sm md:text-base">Transaction fees</span>
                                </dd>
                            </div>
                            <div className="flex items-center py-2">
                                <svg className="z-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" fill="#0095DA" stroke="#C3EBFF" strokeWidth="4"/></svg>
                                <dt className="px-3 text-sm md:text-base">Within minutes</dt>
                                <dd className="flex items-center">
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#777777"/></svg>
                                    <span className="px-2 text-sm md:text-base">Delivery time</span>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div>
                        <Link
                            to="/subscribe"
                            className="block text-center my-4 font-semibold w-full text-white bg-primary rounded border border-primary p-3 transition ease-in-out duration-500"
                        >
                            Make a transfer
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}