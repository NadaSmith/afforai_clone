import React from "react";
import styles from "../Styles/Container6.module.css"
import landingImage6 from "../Images/mobile-landing-6.png";
import landingImage7 from "../Images/mobile-landing-7.png";
import landingImage8 from "../Images/mobile-landing-8.png";
import landingImage9 from "../Images/mobile-landing-9.png";
import landingImage10 from "../Images/mobile-landing-10.png";

const Container6 = () => {
    return (
        <div className={styles.Container6}>
            <div>
                <div>
                    <div className={styles.wordContent}>
                        <div className={styles.box}>
                            Why choose us?
                        </div>
                        <div className={styles.title}>
                            Built for the user
                        </div>
                        <div className={styles.paragraph}>
                            Afforrai is where exceptional customer focus meets<br />exceptional technology.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.firstRow}>
                <div>
                    <div className={styles.firstImage}>
                        <div className={styles.topPart}>
                            <picture>
                                <source srcSet={landingImage6} type="image/webp" />
                                <img src={landingImage6} alt="Afforai supports multiple languages" />
                            </picture>
                        </div>
                        <div className={styles.wordSection}>
                            <div className={styles.wordSectionTitle}>
                                <span>Cross Language Querying</span>
                                <div className={styles.new}>
                                    <span>NEW</span>
                                </div>
                            </div>
                            <div className={styles.wordSectionParagraph}>
                                Afforai is able to translate your documents to more than 100 languages, meaning<br />wherever you're from, you can be assured we can help.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.secondImage}>
                        <div className={styles.topPart}>
                            <picture>
                                <source srcSet={landingImage7} type="image/webp" />
                                <img src={landingImage7} alt="Afforai support multiple document formats" />
                            </picture>
                        </div>
                        <div className={styles.wordSection}>
                            <div className={styles.wordSectionTitle}>
                                <span>Multiple file types supported</span>
                            </div>
                            <div className={styles.wordSectionParagraph}>
                                Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX &amp; XLSX, as well as your own text &amp; links from Websites. The possibilities are limitless!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lastRow}>
                <div className={styles.column}>
                    <div className={styles.thirdImage}>
                        <div className={styles.topPart}>
                            <picture>
                                <source srcSet={landingImage8} type="image/webp" />
                                <img src={landingImage8} alt="Afforai shows you how it got its answer" />
                            </picture>
                        </div>
                        <div className={styles.wordSection}>
                            <div className={styles.wordSectionTitle}>
                                <span>Valuable Data Citation</span>
                                <div className={styles.new}>
                                    <span>NEW</span>
                                </div>
                            </div>
                            <div className={styles.wordSectionParagraph}>
                                Afforai is able to show exactly where your data has been extracted from &amp; highlight it for you, so you never loose your time<br />validating information again.
                            </div>
                        </div>
                    </div>
                    <div className={styles.fourthImage}> 
                        <div className={styles.topPart}>
                            <picture>
                                <source srcSet={landingImage10} type="image/webp" />
                                <img src={landingImage10} alt="Built in Document Viewer" />
                            </picture>
                        </div>
                        <div className={styles.wordSection}>
                            <div className={styles.wordSectionTitle}>
                                <span>Built in Document Viewer</span>
                            </div>
                            <div className={styles.wordSectionParagraph}>
                                Never Switch tabs again. Afforai's document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.soloPic}>
                    <div className={styles.fifthImage}>
                        <div className={styles.topPart}>
                            <picture>
                                <source srcSet={landingImage9} type="image/webp" />
                                <img src={landingImage9} alt="Afforai is secured with the power of the cloud" />
                            </picture>
                        </div>
                        <div className={styles.wordSection}>
                            <div className={styles.wordSectionTitle}>
                                <span>Unbreakable Security</span>
                            </div>
                            <div className={styles.wordSectionParagraph}>
                                Afforai uses Azure Server &amp; Azure OpenAI API. In other words, your data is more than<br />safe with us.
                                <a href="/security">Learn more</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container6;