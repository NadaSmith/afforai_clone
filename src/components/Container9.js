import React from "react";
import styles from "../Styles/Container9.module.css";
import landingImage13 from "../Images/laptop-landing-13.png";

const Container9 = () => {
    return (
        <div>
            <div className={styles.Container9}>
                <div>
                    <div className={styles.textContainer}>
                        <div className={styles.box}>
                            Multiple Language Supported
                        </div>
                        <div className={styles.title}>
                            Regardless of where you are<br />from, Afforai is for you
                        </div>
                        <div className={styles.paragraph}>
                            We support more than 100 Languages, meaning you can seamlessly useour services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.
                        </div>
                    </div>
                </div>
                <div>
                    <picture className={styles.picture}>
                        <source srcSet={landingImage13} type="image/webp"></source>
                        <img src={landingImage13} alt="Afforai supports over 100 languages and allow users to upload and ask question in most languages" />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default Container9;