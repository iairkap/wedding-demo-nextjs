import React from 'react';
import Diviser from './Diviser';
import styles from "../styles/WhenWhereCard.module.css"
import Image from 'next/image';
interface Props {
    title: string;
    parraf: string;
    parraf2?: string;

}


function WhenWhereCard({ title, parraf, parraf2 }: Props): JSX.Element {
    return (

        <section className={styles.section}>

            <header className={styles.header}>
                <div className={styles.absolute}>
                    <Image src={"/etiqueta.png"} width={500} height={300} layout="responsive" alt={title} />
                </div>

            </header>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles["parraf-container"]}>
                <p className={styles.p}>{parraf}</p>
                {parraf2 && <p className={styles.p}>{parraf2}</p>}
            </div>
            <Diviser />
        </section>
    );
}

export default WhenWhereCard;