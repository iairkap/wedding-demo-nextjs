import React from 'react';
import styles from "../styles/diviser.module.css"
function Diviser() {
    return (
        <div className={styles.div}>
            <div className={styles.diviser}>
                <div className={styles.lineblack}></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="25" viewBox="0 0 39 25" fill="none" style={{ zIndex: "400" }}>
                    <g style={{ mixBlendMode: "lighten", zIndex: "300" }}>
                        <path style={{ zIndex: "300" }} d="M13.5 25L11.5425 23.2016C4.59 16.8392 0 12.6294 0 7.49319C0 3.28338 3.267 0 7.425 0C9.774 0 12.0285 1.10354 13.5 2.83379C14.9715 1.10354 17.226 0 19.575 0C23.733 0 27 3.28338 27 7.49319C27 12.6294 22.41 16.8392 15.4575 23.2016L13.5 25Z" fill="#00A58B" />
                    </g>
                    <g style={{ mixBlendMode: "lighten", zIndex: "300" }}>
                        <path style={{ zIndex: "300" }} d="M25.5 25L23.5425 23.2016C16.59 16.8392 12 12.6294 12 7.49319C12 3.28338 15.267 0 19.425 0C21.774 0 24.0285 1.10354 25.5 2.83379C26.9715 1.10354 29.226 0 31.575 0C35.733 0 39 3.28338 39 7.49319C39 12.6294 34.41 16.8392 27.4575 23.2016L25.5 25Z" fill="#FC2733" />
                    </g>
                </svg>
                <div className={styles.lineblack}></div>
            </div>
        </div>
    );
}

export default Diviser;