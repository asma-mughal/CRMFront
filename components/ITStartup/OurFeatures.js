import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurFeatures = () => {
    return (
        <>
            <div className="features-area pt-80 pb-50 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Nos Fonctionnalités</h2>
                        <div className="bar"></div>
                        <p>Notre intelligence artificielle est conçue pour répondre aux appels d'offre. Elle peut analyser le cahier des charges et comprendre les attentes et les critères d'évaluation, préparer une offre complète et détaillée et rechercher les besoins et les attentes des clients pour les intégrer dans l'offre.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Settings />
                                </div>
                                <h3>
                                    Technologies avancées
                                </h3>
                                <p>Nous utilisons des technologies de pointe pour offrir aux clients une solution puissante et facile à utiliser.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Mail />
                                </div> 
                                <h3>
                                    Réponse rapide
                                </h3>
                                <p>Notre intelligence artificielle est conçue pour répondre aux appels d'offre en temps réel.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Grid />
                                </div>
                                <h3>
                                    Exactitude 
                                </h3>
                                <p>Nos algorithmes et notre intelligence artificielle peuvent analyser le cahier des charges et comprendre les critères d'évaluation.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Info />
                                </div>
                                <h3>
                                    Assistance personnalisée
                                </h3>
                                <p>Nous avons une équipe d'assistance professionnelle prête à répondre à vos besoins et à vous guider tout au long du processus.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Box />
                                </div>
                                <h3>Nos Fonctionnalités</h3>
                        <div className="bar"></div>
                        <p>Notre intelligence artificielle est conçue pour simplifier le processus d'élaboration des appels d'offre. Elle peut analyser le cahier des charges et comprendre les critères d'évaluation, préparer une offre complète et détaillée et rechercher les besoins et les attentes des clients pour les intégrer dans l'offre.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Bell />
                                </div>
                                <h3>
                                    Rappels de deadline
                                </h3>
                                <p>Nos rappels de deadline vous aideront à respecter les délais afin que vous puissiez soumettre votre offre à temps.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurFeatures;  