import React from "react";
import styles from "../Styles/Container13.module.css";
import Container13a from "./Container13a";
import Container13b from "./Container13b";
import reviewImage from "../Images/ph-review.webp";

const Container13 = () => {
    return (
        <div className={styles.Container13}>
            <div>
                <div>
                    <div className={styles.titleSection}>
                        <a className={styles.link} href="https://www.producthunt.com/products/afforai/">
                            <picture>
                                <source srcSet={reviewImage} type="image/webp" />
                                <img src={reviewImage} alt="Product Hunt Review 4.9/5" />
                            </picture>
                        </a>
                        <div className={styles.title}>
                            See what our users say
                        </div>
                        <div className={styles.paragraph}>
                            Loved by thousands, all around the World
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rotatingSection}>
                <Container13a />  
                <Container13a /> 
                <Container13a /> 
                <Container13b />
                <Container13b />
                <Container13b />
            </div>
        </div>
    );
};

export default Container13;