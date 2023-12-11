import React from "react";
import { faCircleP } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container13a from "./Container13a";
import Container13b from "./Container13b";

const Container13 = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <a href="https://www.producthunt.com/products/afforai/">
                            <picture>
                                <source srcSet="/images/ph-review.webp" type="image/webp" />
                                <img src="/images/ph-review.webp" alt="Product Hunt Review 4.9/5" />
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