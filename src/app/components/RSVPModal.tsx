import React, { useState } from 'react';
import styles from "../styles/RSVPmodal.module.css";
import ReactModal from 'react-modal';

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    weddingId: number;
}

function RSVPModal({ isOpen, setIsOpen, weddingId }: Props) {
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        emailInvitation: "",
        isAttending: false,
        weddingId: weddingId
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    console.log(isSubmitted)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm({
            ...form,
            [e.target.name]: value
        });
    }

    const onRequestClose = () => {
        setIsOpen(false);
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/invitation', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            if (response.ok) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ReactModal isOpen={isOpen}
            className={styles.myModal}
            onRequestClose={onRequestClose}
            overlayClassName={styles.overlay}>
            <div className={styles.generalContainer}>
                {isSubmitted ? (
                    <div className={styles.confirmationApprove}>
                        <h2>
                            Your response has been recorded. Thank you!
                        </h2>
                        <button className={styles.button} onClick={onRequestClose}>Close</button>
                    </div>
                ) : (
                    <>
                        <div className={styles.headerContainer}>
                            <h2>Are you attending?</h2>
                            <div className={styles.checkboxContainer}>
                                <label className={styles.checkboxLabel}>
                                    <input type="checkbox" name="isAttending" checked={form.isAttending} onChange={() => setForm({ ...form, isAttending: true })} className={styles.checkboxInput} />
                                    <span className={styles.checkboxCustom}></span>
                                    <span className={styles.yes}>Yes</span>
                                </label>
                                <label className={styles.checkboxLabel}>
                                    <input type="checkbox" name="isAttending" checked={!form.isAttending} onChange={() => setForm({ ...form, isAttending: false })} className={styles.checkboxInput} />
                                    <span className={styles.checkboxCustom}></span>
                                    <span className={styles.yes}>No</span>
                                </label>
                            </div>
                        </div>
                        <form action="" className={styles.form} onSubmit={handleSubmit}>
                            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Name' className={styles.inputa} />
                            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder='Last Name' className={styles.inputa} />
                            <input type="text" name="emailInvitation" value={form.emailInvitation} onChange={handleChange} placeholder='Email' className={styles.inputa} />
                            <button type="submit" className={styles.button}>Submit</button>
                        </form>
                    </>
                )}
            </div>
        </ReactModal>
    );
}

export default RSVPModal;