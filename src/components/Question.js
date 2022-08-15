import React from "react";
import styles from './Question.module.css';
import { motion } from 'framer-motion/dist/framer-motion';

const Question = (props) => {
    return <motion.div className={styles.QuestionContainer}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.3, duration: 0.8, delay: 2 - (props.index * 0.2) } }}
    >
        {console.log(props.index)}
        <div className={styles.Question} id={props.id} onClick={() => props.onClick(props.id)}>
            {props.que}
        </div>
        {props.selected ? <div className={styles.Answer}>
            {props.ans}
        </div> : null}
    </motion.div>
}
export default Question;