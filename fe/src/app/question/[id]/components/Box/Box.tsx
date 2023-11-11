"use client";

import Button from "@/components/Button";
import styles from "./Box.module.css";
import Question from "./components/Question";

import { copy } from "@/copy/en";

const Box: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2>{copy.question_form_title}</h2>
            <div className={styles.space4} />
            <div className={styles.buttonContainer}>
                <Question />
                <div className={styles.space_horizontal4} />
                <Button onClick={() => {}}>
                    {copy.question_form_next_button}
                </Button>
            </div>
        </div>
    );
};

export default Box;