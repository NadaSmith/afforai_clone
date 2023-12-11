import React from "react";
import { faAngleRight, faSolidCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container2 = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src="/images/appsumo.png"/>
                        <span>Now on AppSumo</span>
                        <a href="https://appsumo.8odi.net/3eR3xn">
                            <span>Get Lifetime Deal</span>
                            <div><FontAwesomeIcon icon={faAngleRight} /></div>
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
                        <div>FontAwesomeIcon icon={faSolidCheck} </div>
                        Summarize Key Findings
                    </div>
                    <div>
                        <div>FontAwesomeIcon icon={faSolidCheck} </div>
                        Compare Between Documents
                    </div>
                    <div>
                        <div>FontAwesomeIcon icon={faSolidCheck} </div>
                        Search for Answers
                    </div>
                    <div>
                        <div>FontAwesomeIcon icon={faSolidCheck} </div>
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
                    <img src="image/laptop-landing-1.png" />
                </div>
                <div>
                    <img src="image/laptop-landing-3.png" />
                </div>
            </div>
        </div>
    );
};

export default Container2;