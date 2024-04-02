import React from 'react';
import WhenWhereCard from './WhenWhereCard';
import Diviser from './Diviser';
import styles from "../styles/WhenWhere.module.css"
function WhereWhere() {
    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h2>
                    <span className={styles.red}>WHEN</span> <span className={styles.black}> & </span>
                    <span className={styles.blue}>
                        WHERE
                    </span>
                </h2>
                <Diviser />
            </header>
            <div className={styles["card-container"]}>
                <WhenWhereCard
                    title="WHEN"
                    parraf="Saturday, June 15, 2024"
                    parraf2="6:00 pm"
                />
                <WhenWhereCard
                    title="WHERE"
                    parraf="Our wedding will take place at the beautiful Psagot Vinery in "
                    parraf2="6:00 pm"
                />
            </div>
        </section >

    );
}

export default WhereWhere;