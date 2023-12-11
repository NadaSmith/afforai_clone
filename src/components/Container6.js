import React from "react";
import landingImage6 from "../Images/mobile-landing-6.png";
import landingImage7 from "../Images/mobile-landing-7.png";
import landingImage8 from "../Images/mobile-landing-8.png";
import landingImage9 from "../Images/mobile-landing-9.png";
import landingImage10 from "../Images/mobile-landing-10.png";

const Container6 = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            Why choose us?
                        </div>
                        <div>
                            Built for the user
                        </div>
                        <div>
                            Afforrai is where exceptional customer focus meets exceptional technology.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <picture>
                                <source srcSet={landingImage6} type="image/webp" />
                                <img src={landingImage6} alt="Afforai supports multiple languages" />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <span>Cross Language Querying</span>
                                <div>
                                    <span>NEW</span>
                                </div>
                            </div>
                            <div>
                                Afforai is able to translate your documents to more than 100 languages, meaning wherever you're from, you can be assured we can help.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <picture>
                                <source srcSet={landingImage7} type="image/webp" />
                                <img src={landingImage7} alt="Afforai support multiple document formats" />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <span>Multiple file types supported</span>
                            </div>
                            <div>
                                Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX &amp; XLSX, as well as your own text &amp; links from Websites. The possibilities are limitless!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <picture>
                                <source srcSet={landingImage8} type="image/webp" />
                                <img src={landingImage8} alt="Afforai shows you how it got its answer" />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <span>Valuable Data Citation</span>
                                <div>
                                    <span>NEW</span>
                                </div>
                            </div>
                            <div>
                                Afforai is able to show exactly where your data has been extracted from &amp; highlight it for you, so you never loose your time validating information again.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <picture>
                                <source srcSet={landingImage10} type="image/webp" />
                                <img src={landingImage10} alt="Built in Document Viewer" />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <span>Built in Document Viewer</span>
                            </div>
                            <div>
                                Never Switch tabs again. Afforai's document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <picture>
                                <source srcSet={landingImage9} type="image/webp" />
                                <img src={landingImage9} alt="Afforai is secured with the power of the cloud" />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <span>Unbreakable Security</span>
                            </div>
                            <div>
                                Afforai uses Azure Server &amp; Azure OpenAI API. In other words, your data is more than safe with us.
                                <a href="/security">Learn more</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container6;