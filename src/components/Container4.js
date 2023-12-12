import React from "react";
import styles from "../Styles/Container4.module.css"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import landingImage4 from "../Images/mobile-landing-4.png";

const Container4 = () => {
    return (
        <div>
           <div className={styles.Container4}>
                <div className={styles.wordContent}>
                    <div>
                        <div className={styles.title}>
                            Say goodbye to long, tiresome<br />documents
                        </div>
                        <div className={styles.paragraph}>
                        Afforai seamlessly translates documents, files, spreadsheets &amp;<br />websites, filtering out what you don't need &amp; answering your<br />specific questions within seconds.
                        </div>
                        <div className={styles.list}>
                            {/* Couldn't download the circled checkmark image*/}
                            <div className={styles.listItems}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>A whip smart research assistant</span>
                            </div>
                            <div className={styles.listItems}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>We speak every language</span>
                            </div>
                            <div className={styles.listItems}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Reliable data citation for answers</span>
                            </div>
                            <div className={styles.listItems}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Fort-Knox level data security</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.pictureContainer}>
                    <picture className={styles.picture}>
                        <source srcSet={landingImage4} type="image/webp"></source>
                        <img src={landingImage4} />
                    </picture>
                </div>
           </div>
        </div>
    );
};

export default Container4;