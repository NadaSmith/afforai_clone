import React from 'react';
import logoImage from "../Images/logo-new-violet.webp";
import styles from "../Styles/Nav.module.css" ;

const Nav = () => {

    return (
        <nav >
            <div className={styles.navContainer}>
                <div className={styles.navSection1}>
                    <a href='/'>
                        <picture>
                            <source srcSet={logoImage} type='image/webp' />
                            <img src={logoImage} alt='Afforai Logo' />  
                        </picture>

                        <div className={styles.title}>Afforai</div>
                    </a>
                </div>
                
                <div className={styles.navSection2}>
                    <a href='https://afforai.getrewardful.com/signup'>
                        <span>Affiliate</span>
                    </a>

                    <a href='https://www.afforai.com/pricing'>
                        <span>Pricing</span>       
                    </a>

                    <a href='https://www.afforai.com/#testimonial'>
                        <span>Testimonials</span>
                    </a>

                    <a href='https://help.afforai.com/'>
                        <span>Help Center</span>
                    </a>
                </div>

                <div className={styles.navSection3}>
                    <button className={styles.button1} type='button' >
                        Log in
                    </button>

                    <button className={styles.button2} type='button'>
                        Try for Free
                    </button>
                </div>
            </div>
        </nav>
    );

};

export default Nav;
