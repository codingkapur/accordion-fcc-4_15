import Question from './Question'
import questions from './data'
import {useState, useEffect} from 'react'

function Questions() {
//Set State of questions
  const [faqs, setFaqs] = useState(questions)
    return (
        <div className="questions__container">
        {faqs.map((faq)=>{
            return <Question key={faq.id} faq = {faq} /> })}   
        </div>
    )
}
export default Questions