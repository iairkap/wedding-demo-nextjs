import React from 'react';
import styles from "../styles/AboutUsCardContainer.module.css"
import AboutUsCard from './AboutUsCard';


function AboutUsCardContainer() {
    return (
        <section className={styles.container}>
            <AboutUsCard
                name="Jen Stein"
                rol="Bride"
                parragraph={`Ron and I first crossed paths during our college years in the fall of 2014. I vividly recall catching glimpses of Ron around campus and initially finding him quite intimidating, which left me hesitant to approach him. However, once we were introduced, my perception quickly shifted, and I realized just how wrong I had been about Ron. He revealed himself to be not only incredibly charming but also remarkably kind-hearted, thoughtful, goofy, fun-loving, easy-going, and endlessly creative. And yes, undeniably attractive.`}
                parragraph2={`What initially drew me to Ron was his deep love for animals and his unwaveringly positive attitude towards life. Few things rival the joy of hearing Ron's laughter fill the room. Fast forward ten years, and here we are, officially celebrating a decade of being together. These past years have been nothing short of amazing, and I eagerly anticipate embarking on this new chapter of life with him. Ron holds an irreplaceable place in my heart, and the fact that he's soon to be my husband still feels surreal.`
                }
            />
            <AboutUsCard
                name="Ron Shalav"
                rol="Groom"
                parragraph={`Jen and I crossed paths in college during the fall of 2014. I remember seeing Jen around campus, her passion for cinema shining through in every conversation. Initially, I found her overwhelming, her love for movies bordering on the cheesy. However, once we were introduced, I realized there was more to Jen than meets the eye.\n\n
        She is unabashedly sentimental, her affection for romantic films evident in the way she sees the world. Jen's gestures are grand and her declarations heartfelt, often leaving me pleasantly surprised. Though her cinematic references may be a bit clichéd at times, they never fail to bring a smile to my face.`}
                parragraph2={`Over the years, our friendship flourished amidst late-night movie marathons and animated discussions about our favorite directors. Now, as we approach a new chapter, I am grateful for Jen's steadfast presence in my life. She's more than just a friend; she's the leading lady in the story of my life, and I cherish every moment we share.`}
            />

        </section >
    );
}

export default AboutUsCardContainer;