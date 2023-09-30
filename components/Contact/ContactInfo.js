import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-info-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>
                                <h3>EMail ici</h3>
                                <p><a href="contact@mansapro.com">contact@mansapro.com</a></p>
                               
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <Icon.MapPin />
                                </div>
                                <h3>Nous trouver</h3>
                                <p>66 Avenue des champs elysées, Paris, France</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <Icon.Phone />
                                </div>
                                <h3>Appelez ici</h3>
                                <p><a href="tel:+33618746277">+33618746277</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo;  