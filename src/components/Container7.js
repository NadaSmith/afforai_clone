import React from "react";
import landingImage11 from "../Images/mobile-landing-11.png";

const Container7 = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                Most versatile
                            </div>
                        </div>
                        <div>
                            Create multiple chatbots for different purposes
                        </div>
                        <div>
                            Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.
                        </div>
                        <div>
                            <button type="button">Get started</button>
                            <button type="button">View pricing</button>
                        </div>
                    </div>
                </div>
                <div>
                    <picture>
                        <source srcSet={landingImage11} type="image/webp" />
                        <img src={landingImage11} alt="Afforai masters the documents you upload" />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default Container7;