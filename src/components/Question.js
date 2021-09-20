import {useState} from 'react'

function Question({faq}) {

    const [faqState, setfaqState] = useState(false)

    return (
        <div className="question__container">
            <div className="question__top-row">
                <p className="question">{faq.title}</p>
                <p className="btn" onClick={() => setfaqState(!faqState)}>{faqState? '-' : '+'}</p>
            </div>
            <p className="answer">{faqState? faq.info : ''}</p>
        </div>
    )
}

export default Question