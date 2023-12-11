import React from "react";
import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appsumoImage from "../Images/appsumo.png";
import landingImage1 from "../Images/laptop-landing-1.png";
import landingImage3 from "../Images/laptop-landing-3.png";

const Container2 = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src={appsumoImage} alt=""/>
                        <span>Now on AppSumo</span>
                        <a href="https://appsumo.8odi.net/3eR3xn">
                            <span>Get Lifetime Deal</span>
                            <div>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </a>
                    </div>
                    <di>
                        Your second brain for maximizing productivity
                    </di>
                </div>
                <div>
                    Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
                </div>
                <div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        Summarize Key Findings
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faCheck} />
                            </div>
                        Compare Between Documents
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        Search for Answers
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        Ask in Any Language
                    </div>
                </div>
                <div>
                    <button type="button">
                        Try for Free
                    </button>
                    <button type="button">
                        View pricing
                    </button>
                </div>
                <div>
                    <img src={landingImage1} alt="" />
                </div>
                <div>
                    <img src={landingImage3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Container2;