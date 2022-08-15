import React, { useState } from "react";
import Question from "../Question";
import styles from '../Question.module.css';
import { faq } from '../../Data';

const FAQ = () => {
    const [selectedQuestion, setSelectedQuestion] = useState();

    const selectQuestionHandler = (id) => {
        // const question = event.target.id;
        console.log(id);
        selectedQuestion === id ? setSelectedQuestion('') : setSelectedQuestion(id);
    }

    return <div className={styles.FAQpageLayout}>
        {faq.map((item, index) => {
            return <Question
                key={item.id}
                id={item.id}
                que={item.question}
                ans={item.answer}
                index={index}
                selected={selectedQuestion === item.id ? true : false}
                onClick={selectQuestionHandler}></Question>
        })}
    </div>

}

export default FAQ;