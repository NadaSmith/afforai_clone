import React from "react";
import landingImage2 from "../Images/laptop-landing-2.png";
import styles from "../Styles/Container3.module.css"

const Container3 = () => {
    return (
        <div>
            <div className={styles.Container3}>
                <p>Loved by <span>20,000+</span> users around the world</p>
                <div>
                    <img src={landingImage2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Container3;