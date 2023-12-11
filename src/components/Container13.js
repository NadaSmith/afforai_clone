import React from "react";
import Container13a from "./Container13a";
import Container13b from "./Container13b";
import reviewImage from "../Images/ph-review.webp";

const Container13 = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <a href="https://www.producthunt.com/products/afforai/">
                            <picture>
                                <source srcSet={reviewImage} type="image/webp" />
                                <img src={reviewImage} alt="Product Hunt Review 4.9/5" />
                            </picture>
                        </a>
                        <div>
                            Swhat our users say
                        </div>
                        <div>
                            Loved by thousands, all around the World
                        </div>
                    </div>
                </div>
            </div>
            <Container13a />  
            <Container13a /> 
            <Container13a /> 
            <Container13b />
            <Container13b />
            <Container13b />
        </div>
    );
};

export default Container13;