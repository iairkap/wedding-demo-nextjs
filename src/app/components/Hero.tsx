"use client"
import React, { useState } from 'react';
import styles from "../styles/hero.module.css"
import DiviserWhite from './DiviserWhite';
import RSVPModal from './RSVPModal';
interface Props {
    title: string;
    subtitle: string;
    subtitle2: string;
    subtitle3: string;

}

function Hero({ title, subtitle, subtitle2, subtitle3 }: Props) {

    const [formApprove, setFormApprove] = useState(false);

    const handleClick = () => {
        setFormApprove(true);
    }
    return (
        <section className={styles.section}>
            <div className={styles.background}></div>
            <article >
                <h1 className={styles.h1}>
                    {title}
                </h1>
                <DiviserWhite />
                <div className={styles.container}>
                    <h2 className={styles.invite}>{subtitle}</h2>
                    <h2 className={styles.wedding}>{subtitle2}</h2>
                    <h2 className={styles.celebration}>{subtitle3}</h2>
                </div>
                <div className={styles.containerA}>
                    <div className={styles.svgContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="122" height="116" viewBox="0 0 122 116" fill="none">
                            <g style={{ mixBlendMode: "soft-light" }}>
                                <ellipse cx="63.5" cy="60" rx="58.5" ry="56" fill="rgb(111 0 6)"
                                />
                            </g>
                            <g style={{ mixBlendMode: "multiply" }}>
                                <ellipse cx="58.5" cy="56" rx="58.5" ry="56" fill="#00A58B" />
                            </g>
                        </svg>
                    </div>
                    <span className={styles.rsvpButton} onClick={handleClick}>RSVP</span>
                </div>
            </article >
            <RSVPModal isOpen={formApprove} setIsOpen={setFormApprove} weddingId={4} />
        </section>

    );
}

export default Hero;