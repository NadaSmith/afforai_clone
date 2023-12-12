import React from "react";
import landingImage5 from "../Images/mobile-landing-5.png";
import styles from "../Styles/Container5.module.css";

const Container5 = () => {
    return (
        <div className={styles.Container5}>
            <div className={styles.wordContainer}>
                <div>
                    <div>
                        <div className={styles.box}>
                            <div>10x your productivity</div>
                        </div>
                        <div className={styles.title}>
                            Save yourself from stress &<br />streamline your workflow
                        </div>
                        <div className={styles.paragraph}>
                            The average worker spends 9 hours per week looking through &amp; gathering<br />information from thick stacks of documents. With Afforai, you can save<br />yourself 8 hours per week (plus a lot of headaches).
                        </div>
                    </div>
                </div>
            </div>
            <div> 
                {/*Somehow I have the wrong image, but I made it work*/}
                <div className={styles.image}> 
                    <img src={landingImage5} />
                </div>
            </div>
        </div>
    );
};

export default Container5;