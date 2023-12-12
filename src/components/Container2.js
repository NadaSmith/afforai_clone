import React from "react";
import styles from "../Styles/Container2.module.css";
import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appsumoImage from "../Images/appsumo.png";
import landingImage1 from "../Images/laptop-landing-1.png";
import landingImage3 from "../Images/laptop-landing-3.png";

const Container2 = () => {
    return (
        <div className={styles.Container2}>
            <div> 
                <div>
                    <div className={styles.appsumo}>
                        <div className={styles.appsumoLeft}>
                            <img src={appsumoImage} alt=""/>
                            <span >Now on AppSumo</span>
                        </div>
                        <a href="https://appsumo.8odi.net/3eR3xn">
                            <span>Get Lifetime Deal</span>
                            <div>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </a>
                    </div>
                    <div className={styles.container2Title}>
                        Your second brain for<br />maximizing productivity
                    </div>
                </div>
                <div className={styles.paragraph}>
                    Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to<br />produce trustworthy research. Feed lengthy research documents to stacks of dry compliance<br />requirements and extract the key findings you need.
                </div>
                <div className={styles.facts}>
                    <div className={styles.factsContainer}>
                        <div>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        Summarize Key Findings
                    </div>
                    <div className={styles.factsContainer}>
                        <div>
                            <FontAwesomeIcon icon={faCheck} />
                            </div>
                        Compare Between Documents
                    </div>
                    <div className={styles.factsContainer}> 
                        <div>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        Search for Answers
                    </div>
                    <div className={styles.factsContainer}>
                        <div>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        Ask in Any Language
                    </div>
                </div>
                <div className={styles.container2Buttons}>
                    <button className={styles.container2Button1} type="button">
                        Try for Free
                    </button>
                    <button className={styles.container2Button2} type="button">
                        View pricing
                    </button>
                </div>
                <div className={styles.container2Image}>
                    <img src={landingImage1} alt="" />
                </div>
                <div className={styles.backgroundImage}>
                    <img src={landingImage3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Container2;