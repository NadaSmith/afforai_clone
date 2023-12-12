import React from "react";
import styles from "../Styles/Container11.module.css";
import landingImage15 from "../Images/laptop-landing-15.png"

const Container11 = () => {
    return (
        <div className={styles.Container11}>
            <div>       
                <div>
                    <div>
                        <div className={styles.box}>
                            Seamless Integrations - Coming Soon
                        </div>
                        <div className={styles.title}>
                            Upload Files directly from Google<br />Drive, One Drive &amp; Dropbox
                        </div>
                        <div className={styles.paragraph}>
                            Afforai allows you to upload files directly from Google Drive, One Drive &amp; Dropbox,<br />meaning your experience will be smooth sailing regardless of your preferred 
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.picture}>
                    <img src={landingImage15} alt="Click here to upload your document" />
                </div>
            </div>
        </div>
    );
};

export default Container11;