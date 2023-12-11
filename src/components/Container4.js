import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container4 = () => {
    return (
        <div>
           <div>
                <div>
                    <div>
                        <div>
                            Say goodbye to long, tiresome documents
                        </div>
                        <div>
                        Afforai seamlessly translates documents, files, spreadsheets &amp; websites, filtering out what you don't need &amp; answering your specific questions within seconds.
                        </div>
                        <div>
                            {/* Couldn't download the circled checkmark image*/}
                            <div>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>A whip smart research assistant</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>We speak every language</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Reliable data citation for answers</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Fort-Knox level data security</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <picture>
                        <source srcSet="/images/laptop-landing-4.png" type="image/webp"></source>
                        <img src="/images/laptop-landing-4.png" />
                    </picture>
                </div>
           </div>
        </div>
    );
};

export default Container4;