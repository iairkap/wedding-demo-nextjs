import React from 'react';
import styles from "../styles/diviser.module.css"
function Diviser() {
    return (
        <div className={styles.div}>
            <div className={styles.diviser}>
                <div className={styles.lineblack}></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="18"
                    viewBox="0 0 28 18"
                    fill="none"
                >
                    <g style={{ mixBlendMode: "darken" }}>
                        <path
                            d="M9.5 18L8.1225 16.7052C3.23 12.1243 0 9.09319 0 5.3951C0 2.36403 2.299 0 5.225 0C6.878 0 8.4645 0.79455 9.5 2.04033C10.5355 0.79455 12.122 0 13.775 0C16.701 0 19 2.36403 19 5.3951C19 9.09319 15.77 12.1243 10.8775 16.7052L9.5 18Z"
                            fill="#00A58B"></path>
                    </g>
                    <g style={{ mixBlendMode: "darken" }}>
                        <path
                            d="M18.5 18L17.1225 16.7052C12.23 12.1243 9 9.09319 9 5.3951C9 2.36403 11.299 0 14.225 0C15.878 0 17.4645 0.79455 18.5 2.04033C19.5355 0.79455 21.122 0 22.775 0C25.701 0 28 2.36403 28 5.3951C28 9.09319 24.77 12.1243 19.8775 16.7052L18.5 18Z"
                            fill="#FC2733"></path>
                    </g>
                </svg>
                <div className={styles.lineblack}></div>
            </div>
        </div>
    );
}

export default Diviser;