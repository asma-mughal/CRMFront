import React from 'react';
import Link from 'next/link';

const FunFactsArea = () => {
    return (
        <>
            <div className="funfacts-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Nous essayons toujours de comprendre les attentes des utilisateurs</h2>
                        <div className="bar"></div>
                        <p>Notre intelligence artificielle,peut analyser le cahier des charges, préparer une offre complète et détaillée</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>180K</h3>
                                <p>fichier téléchargé</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>20K</h3>
                                <p>Feedback</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>500+</h3>
                                <p>Utilisateurs</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>70+</h3>
                                <p>contributeurs</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>Vous avez des questions ?</h3>
                        <p>N'hésitez pas à nous contacter</p>

                        <Link href="/contact" className="btn btn-primary">
                        Nous contacter
                        </Link>
                    </div>

                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunFactsArea;