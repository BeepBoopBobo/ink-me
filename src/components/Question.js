import React from "react";
import styles from './Question.module.css';

const Question = (props) => {
    return <div className={styles.QuestionContainer}>
        <div className={styles.Question} id={props.id} onClick={() => props.onClick(props.id)}>
            {props.que}
        </div>
        {props.selected ? <div className={styles.Answer}>
            {props.ans}
        </div> : null}
    </div>
}
export default Question;