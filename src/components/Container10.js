import React from "react";
import landingImage14 from "../Images/laptop-landing-14.png";

const Container10 = () => {
    return (
        <div>
           <div>
                <div>   
                    <div>
                        <div>
                            Get more out of your files
                        </div>
                    </div>
                    <div>
                        File Wizard - a game changing new feature
                    </div>
                    <div>
                        Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.
                    </div>
                </div>
                <div>
                    <picture>
                        <source srcSet={landingImage14} type="image/webp" />
                        <img src={landingImage14} alt="Translate, convert, summarize your files with File Wizard" />
                    </picture>
                </div>
           </div>
        </div>
    );
};

export default Container10;