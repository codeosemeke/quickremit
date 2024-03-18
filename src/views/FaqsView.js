import React, {useState} from 'react'
import Accordion from '../components/Accordion'

export const FaqsView = ({ faqs = [] }) => {
    const [showPanel, setShowPanel] = useState(null)
    const faqs_lists = faqs.map((faqs, key) => {
        return (
            <Accordion
                label={faqs.question}
                isActive={key === showPanel}
                handleClick={() => setShowPanel(key === showPanel ? null : key)}
                key={key}
            >
                <div>
                    <div className="pr-2" dangerouslySetInnerHTML={{ __html: faqs.answer}}></div>
                </div>
            </Accordion>
        )
    });
    return (
        <>
            <div className="mx-auto mb-16">
                    <dl className="mt-6">
                        {faqs_lists}
                    </dl>
            </div>
        </>
    )
}