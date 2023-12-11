import React from "react";
import landingImage20 from "../Images/laptop-landing-20.png";

const Container14 = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                My promise to you
                            </div>
                            <div>
                                % monehy back guarnateed if you are not satisfied
                            </div>
                            <div>
                                We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.
                            </div>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <source srcSet={landingImage20} type="image/webp" />
                            <img src={landingImage20} alt="100% money back gaurantee" />
                         </picture>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container14;