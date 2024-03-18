const Accordion = ({label, children, handleClick, isActive}) => {
    return (
        <div className="bg-white border rounded border-blue-200 my-4">
            <dt className={`${isActive ? 'border-b' : ''}`}>
                <button
                    onClick={handleClick}
                    type="button"
                    className="py-3 md:py-6 px-3 sm:px-6 text-left w-full flex justify-between items-start text-blue-400 focus:outline-none"
                >
                    <span className="font-bold text-gray-500 text-base md:text-lg capitalize">
                        {label}
                    </span>
                    <span className={`${isActive ? '-rotate-180' : 'rotate-0 '} ml-6 h-7 flex items-center transform`}>
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M19 9l-7 7-7-7"/></svg>
                    </span>
                </button>
            </dt>

            <dd className={`mt-2 pr-12 ${isActive ? '' : 'hidden'}`} id="faq-0">
                <div className="py-3 md:py-4 px-3 sm:px-6">
                    <div className="text-sm md:text-base text-gray-600">
                        {children}
                    </div>
                </div>
            </dd>
        </div>
    )
}

export default Accordion