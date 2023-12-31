import React from 'react';
import Link from 'next/link'

const PricingStyleOne = () => {
    return (
        <>
            <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Plans tarifaires</h2>
                        <div className="bar"></div>
                        <p>Notre plan tarifaire offre des tarifs compétitifs et flexibles pour répondre à vos besoins. Nous proposons des tarifs adaptés aux différents budgets et à différents types de clients.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <h3>Plan Standard</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>€</sup>249.99 <span>/Mois</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">5 GB Bandwidth</li>
                                        <li className="active">Highest Speed</li>
                                        <li className="active">1 GB Storage</li>
                                        <li className="active">Unlimited Website</li>
                                        <li className="active">Unlimited Users</li>
                                        <li className="active">24x7 Great Support</li>
                                        <li>Data Security and Backups</li>
                                        <li>Monthly Reports and Analytics</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link href="#" className="btn btn-primary">
                                    Sélectionner un plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table active-plan">
                                <div className="pricing-header">
                                    <h3>Plan Premium</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>€</sup>399.99 <span>/Mois</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">10 GB Bandwidth</li>
                                        <li className="active">Highest Speed</li>
                                        <li className="active">3 GB Storage</li>
                                        <li className="active">Unlimited Website</li>
                                        <li className="active">Unlimited Users</li>
                                        <li className="active">24x7 Great Support</li>
                                        <li className="active">Data Security and Backups</li>
                                        <li>Monthly Reports and Analytics</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link href="#" className="btn btn-primary">
                                    Sélectionner un plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <h3>Plan Élite</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>€</sup>799.99<span>/Mois</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">15 GB Bandwidth</li>
                                        <li className="active">Highest Speed</li>
                                        <li className="active">5 GB Storage</li>
                                        <li className="active">Unlimited Website</li>
                                        <li className="active">Unlimited Users</li>
                                        <li className="active">24x7 Great Support</li>
                                        <li className="active">Data Security and Backups</li>
                                        <li className="active">Monthly Reports and Analytics</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link href="#" className="btn btn-primary">
                                    Sélectionner un plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
            </div>
        </>
    );
    
}

export default PricingStyleOne;
