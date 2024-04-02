import React from 'react';
import styles from "../styles/hero.module.css"
import Diviser from './Diviser';
interface Props {
    title: string;
    subtitle: string;
    subtitle2: string;
    subtitle3: string;

}

function Hero({ title, subtitle, subtitle2, subtitle3 }: Props) {
    return (
        <section className={styles.section}>
            <div className={styles.background}></div>
            <article >
                <h1 className={styles.h1}>
                    {title}
                </h1>
                <Diviser />
                <div className={styles.container}>
                    <h2 className={styles.invite}>{subtitle}</h2>
                    <h2 className={styles.wedding}>{subtitle2}</h2>
                    <h2 className={styles.celebration}>{subtitle3}</h2>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="122"
                    height="116"
                    viewBox="0 0 122 116"
                    fill="none"
                >
                    <g style={{ mixBlendMode: 'soft-light' }}>
                        <ellipse cx="63.5" cy="60" rx="58.5" ry="56" fill="#FC2733"></ellipse>
                    </g>
                    <g style={{ mixBlendMode: 'soft-light' }}>
                        <ellipse cx="58.5" cy="56" rx="58.5" ry="56" fill="#00A58B"></ellipse>
                    </g>
                </svg>
            </article >
        </section>

    );
}

export default Hero;