import React from 'react';
import logoImage from "../Images/logo-new-violet.webp";

const Nav = () => {

    return (
        <nav>
            <div>
                <div>
                    <a href='/'>
                        <picture>
                            <source srcSet={logoImage} type='image/webp' />
                            <img src={logoImage} alt='Afforai Logo' />  
                        </picture>

                        <div>Afforai</div>
                    </a>
                </div>
                
                <div>
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

                <div>
                    <button type='button' >
                        Log in
                    </button>

                    <button type='button'>
                        Try for Free
                    </button>
                </div>
            </div>
        </nav>
    );

};

export default Nav;
