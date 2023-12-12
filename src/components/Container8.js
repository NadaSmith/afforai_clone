import React from "react";
import styles from "../Styles/Container8.module.css"
import { faPowerOff, faFastForward, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import landingImage12 from "../Images/mobile-landing-12.png";

const Container8 = () => {
    return (
        <div>
            <div className={styles.Container8}>
                <div className={styles.imageContainer}>
                    <picture>
                        <source srcSet={landingImage12} type="image/webp"></source>
                        <img src={landingImage12} alt="Afforai supports questions answer with Google and Deep Document search" />
                    </picture>
                </div>
                <div className={styles.textContainer}>
                    <div>
                        <div className={styles.box}>
                            Different Modes Available
                        </div>
                        <div className={styles.title}>
                            Customize your assistant with a range<br />of different modes
                        </div>  
                        <div className={styles.paragraph}>
                            Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).
                        </div>
                        <div className={styles.list}>
                            <div className={styles.listItems}>
                                <FontAwesomeIcon icon={faFastForward} />
                                <div className={styles.noIcons}>
                                    <div className={styles.titlePart}>
                                        <span>Fast Mode (default)</span>  
                                        
                                        <span>1 credit</span>
                                        
                                    </div>
                                    <div className={styles.paragraphPart}>
                                        Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
                                    </div>
                                </div>
                            </div>
                            <div className={styles.listItems}>
                                <FontAwesomeIcon icon={faPowerOff} />
                                <div className={styles.noIcons}>
                                    <div className={styles.titlePart}>
                                        <span>Powerful Mode</span>
                                        
                                        <span>4 credits</span>
                                        
                                    </div>
                                    <div className={styles.paragraphPart}>   
                                        Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).
                                    </div>
                                </div>
                            </div>
                            <div className={styles.listItems}>
                                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                <div className={styles.noIcons}>
                                    <div className={styles.titlePart}>
                                        <span>Google Mode</span>
                                        
                                        <span>5 credits</span>
                                        
                                    </div>
                                    <div className={styles.paragraphPart}>
                                        Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container8;