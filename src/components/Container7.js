import React from "react";
import styles from "../Styles/Container7.module.css"
import landingImage11 from "../Images/mobile-landing-11.png";

const Container7 = () => {
    return (
        <div>
            <div className={styles.Container7}>
                <div className={styles.textContent}>
                    <div>
                        <div>
                            <div className={styles.box}>
                                Most versatile
                            </div>
                        </div>
                        <div className={styles.title}>
                            Create multiple chatbots for<br />different purposes
                        </div>
                        <div className={styles.paragraph}>
                            Legal documents? Summarising a book? Extracting data from a<br />website? We allow you to create multiple chatbots at one time, so you<br />can use Afforai for a whole range of purposes.
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button1} type="button">Get started</button>
                            <button className={styles.button2} type="button">View pricing</button>
                        </div>
                    </div>
                </div>
                <div className={styles.Image}>
                    <picture className={styles.imageContainer}>
                        <source srcSet={landingImage11} type="image/webp" />
                        <img src={landingImage11} alt="Afforai masters the documents you upload" />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default Container7;