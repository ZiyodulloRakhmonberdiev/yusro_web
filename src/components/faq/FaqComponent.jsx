import './faq.css'
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import QuestionsByUser from '../../service/faq';
import Loader from '../../ui/Loader';
import NotAvailable from '../../helpers/NotAvailable';

function FaqComponent() {
    const [openIndex, setOpenIndex] = useState(null);

    const { data: faqs, loading, error } = useFetch(QuestionsByUser.getQuestionsByUser)

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='faq'>
            <div className='faq-title'>Tez-tez So‘raladigan Savollar:</div>
            <div className="faq-items">
                {loading ? <Loader /> : error ? <NotAvailable name={error.message}/> : faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3 onClick={() => handleToggle(index)}>
                            <span>{faq.text}</span>
                            <i className='fa-solid fa-chevron-bottom'></i>
                        </h3>
                        {openIndex === index && <p>{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FaqComponent