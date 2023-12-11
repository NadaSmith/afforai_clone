import React from "react";
import landingImage13 from "../Images/laptop-landing-13.png";

const Container9 = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            Multiple Language Supported
                        </div>
                        <div>
                            Regardless of where you are from, Afforai is for you
                        </div>
                        <div>
                            We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.
                        </div>
                    </div>
                </div>
                <div>
                    <picture>
                        <source srcSet={landingImage13} type="image/webp"></source>
                        <img src={landingImage13} alt="Afforai supports over 100 languages and allow users to upload and ask question in most languages" />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default Container9;