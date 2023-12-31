import React from "react";
import styles from "../Styles/Container12.module.css";
import landingImage17 from "../Images/laptop-landing-17.png";
import landingImage18 from "../Images/laptop-landing-18.png";
import landingImage19 from "../Images/laptop-landing-19.png";

const Container12 = () => {
    return (
        <div className={styles.Container12}>
            <div>
                <div>
                    <div>
                        <div className={styles.title}>
                            Unquestionable accuracy &amp; reliability
                        </div>
                        <div className={styles.paragraph}>
                            We pride ourselves on the quality of our chatbot's responses, and go<br />the extra mile to ensure the accuracy &amp; reliability of our answers.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <div>
                    <div className={styles.imageContainers}>
                        <div>
                            <picture className={styles.picture}>
                                <source srcSet={landingImage17} type="image/webp" />
                                <img src={landingImage17} alt="Security, Reliable, and Trustworthy" />
                            </picture>
                        </div>
                        <div className={styles.textContent}>
                            <div>
                                <span>Trusted by users all over the world</span>
                            </div>
                            <div>
                                Afforai is used all around the World, saving thousands of people time and money with our speed &amp; accuracy.
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className={styles.imageContainers}>
                        <div>
                            <picture className={styles.picture}>
                                <source srcSet={landingImage18} type="image/webp"/>
                                <img src={landingImage18} alt="Afforai gives out the best asnwer with most accurate citations" />
                            </picture>
                        </div>
                        <div className={styles.textContent}>
                            <div>
                                <span>Information filtering</span>
                            </div>
                            <div>
                                Afforai gives you the highest quality answers, and filters out any irrelevant information.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.imageContainers}>
                        <div>
                            <picture className={styles.picture}>
                                <source srcSet={landingImage19} type="image/webp" />
                                <img src={landingImage19} alt="Afforai AI comprehends documents, not repeating them" />
                            </picture>
                        </div>
                        <div className={styles.textContent}>
                            <div>
                                <span>Built in Comprehension Model</span>
                            </div>
                            <div>
                                Our powerful comprehension model increases the power of our data retrieval
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container12;