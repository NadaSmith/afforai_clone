import React from "react";
import { faPowerOff, faFastForward, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import landingImage12 from "../Images/mobile-landing-12.png";

const Container8 = () => {
    return (
        <div>
            <div>
                <div>
                    <picture>
                        <source srcSet="/images/laptop-landing-12.png" type="image/webp"></source>
                        <img src="/images/laptop-landing-12.png" alt="Afforai supports questions answer with Google and Deep Document search" />
                    </picture>
                </div>
                <div>
                    <div>
                        <div>
                            Different Modes Available
                        </div>
                        <div>
                            Customize your assistant with a range of different modes
                        </div>  
                        <di>
                            Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).
                        </di>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faFastForward} />
                                <div>
                                    <div>
                                        <span>Fast Mode (default)</span>  
                                        <div>
                                            <span>1 credit</span>
                                        </div>
                                    </div>
                                    <div>
                                        Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPowerOff} />
                                <div>
                                    <div>
                                        <span>Powerful Mode</span>
                                        <div>
                                            <span>4 credits</span>
                                        </div>
                                    </div>
                                    <div>   
                                        Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                <div>
                                    <div>
                                        <span>Google Mode</span>
                                        <div>
                                            <span>5 credits</span>
                                        </div>
                                    </div>
                                    <div>
                                        Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container8;