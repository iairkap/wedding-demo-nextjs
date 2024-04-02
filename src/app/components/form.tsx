"use client"
import React from 'react';
import axios from 'axios';
import styles from "../styles/RSVP.module.css"
interface Props {
    weddingId: number;
    formApprove: boolean;
    setFormApprove: (formApprove: boolean) => void;
}

function Form({ weddingId, formApprove, setFormApprove }: Props) {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const body = { token, weddingId };
        console.log(`Request body: ${JSON.stringify(body)}`);
        try {
            const response = await axios.post(
                "/api/proxy",
                body,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(`Response OK: ${response.data.message}`);
            setFormApprove(true);
        } catch (error: any) {
            console.error(`Response Error: ${error.response.data.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.inputContainer}>
            <input type="text" className={styles.input} />
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
}

export default Form;