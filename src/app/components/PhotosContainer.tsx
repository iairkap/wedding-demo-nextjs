"use client"
import React, { useState } from 'react';
import styles from "../styles/photoContainer.module.css"
import Diviser from './Diviser';
function PhotosContainer() {
    const images = [
        "/Ron&Jen2.jpg",
        "/Ron&Jen3.jpg",
        "/Ron&Jen4.jpg",
        "/Ron&Jen5.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const changeImage = (index: number): void => {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        setCurrentImage(index);
    };

    const prevImage = () => {
        changeImage(currentImage - 1);
    };

    const nextImage = () => {
        changeImage(currentImage + 1);
    };

    return (
        <section className={styles['general-picture-container']}>
            <div>
                <header className={styles.header}>
                    <h2 className={styles.h2}>Photos</h2>
                    <Diviser />
                </header>
            </div>
            <article className={styles.first}>
                <div className={styles['button-prev']} onClick={prevImage}>&lt;</div>
                <div className={styles['picture-container']}>
                    <img id="image" src={images[currentImage]} alt="pictureName" width={969} />
                </div>
                <div className={styles['button-next']} onClick={nextImage}>&gt;</div>
            </article>
            <div className={styles['button-container']}>
                {
                    Array.from({ length: images.length }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => changeImage(i)}
                            className={i === currentImage ? styles['button-active'] : styles.button}
                        >
                            {i + 1}
                        </button>
                    ))
                }
            </div>
        </section>
    );
}

export default PhotosContainer;