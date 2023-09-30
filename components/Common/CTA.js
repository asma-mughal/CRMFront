import React from 'react';
import Link from 'next/link';

const CTA = () => {
    return (
        <>
            <div className="cta-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="cta-content">
                                <h3>Rejoignez notre base de clients satisfaits et bénéficiez d'un service sur mesure pour votre entreprise !</h3>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                            <div className="cta-right-content">
                                <div className="hosting-price">
                                    <span>À partir de</span>
                                    <h4>€399.00/mo*</h4>
                                </div>

                                <div className="buy-btn">
                                    <Link href="/contact" className="btn btn-primary">
                                    Commencez
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CTA;
