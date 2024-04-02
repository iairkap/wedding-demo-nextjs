"use client"

import React, { useState } from 'react';
import Diviser from './Diviser';
import Form from './form';
import styles from "../styles/RSVP.module.css";
import RSVPModal from './RSVPModal';



function RSVP() {
    const weddingId = 4;

    const [formApprove, setFormApprove] = useState(false);
    console.log(formApprove)

    return (
        <section className={styles.container}>
            <header className={styles["header-container"]}>
                <h2 className={styles["title"]}>RSVP</h2>
                <Diviser />
            </header>
            <article className={styles["text-container"]}>
                <span>Join them in celebrating the life they ve builttogether and all the
                    happiness that awaits. </span>
                <span>Guest, please enter your password to RSVP.</span>
                <Form weddingId={weddingId} formApprove={formApprove} setFormApprove={setFormApprove} />
            </article>
            <RSVPModal isOpen={formApprove} setIsOpen={setFormApprove} weddingId={weddingId} />
        </section>
    );
}

export default RSVP;