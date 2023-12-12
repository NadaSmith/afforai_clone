import React from "react";
import styles from "../Styles/Container10.module.css";
import landingImage14 from "../Images/laptop-landing-14.png";

const Container10 = () => {
    return (
        <div>
           <div className={styles.Container10}> 
                <div>
                    <picture className={styles.picture}>
                        <source srcSet={landingImage14} type="image/webp" />
                        <img src={landingImage14} alt="Translate, convert, summarize your files with File Wizard" />
                    </picture>
                </div>
                <div className={styles.textContainer}>   
                    <div >
                        <div className={styles.box}>
                            Get more out of your files
                        </div>
                    </div>
                    <div className={styles.title}>
                        File Wizard - a game changing new feature
                    </div>
                    <div className={styles.paragraph}>
                        Convert your files with less effort than ever. Afforai's File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.
                    </div>
                </div>
                
           </div>
        </div>
    );
};

export default Container10;