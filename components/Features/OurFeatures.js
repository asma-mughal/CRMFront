import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurFeatures = () => {
    return (
        <>
            <div className="features-area pt-80 pb-50 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Nos fonctionnalités</h2>
                        <div className="bar"></div>
                        <p>la puissance de l'IA pour accroitre votre productivité sur les appels d'offres</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Settings />
                                </div>
                                <h3>
                                    <Link href="/feature-details">
                                    Recherche rapide et efficace des appels d'offre
                                    </Link>
                                </h3>
                                <p>Notre service fournit des outils de recherche et de filtrage avancés pour vous permettre de trouver rapidement et facilement les appels d'offre adaptés à vos besoins.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Mail />
                                </div> 
                                <h3>
                                    <Link href="/feature-details">
                                    Analyse et préparation des offres
                                    </Link>
                                </h3>
                                <p>Notre service fournit des outils d'analyse puissants pour vous aider à évaluer et à élaborer des offres compétitives et adaptées aux exigences et aux critères des appels d'offres.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Grid />
                                </div>
                                <h3>
                                    <Link href="/feature-details">
                                    Présentation des prestations et compétences
                                    </Link>
                                </h3>
                                <p>Nous fournissons des outils d'aide à la présentation des offres, tels que des  des graphiques et illustration, afin de donner à vos offres une présentation visuelle attrayante et claire.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Info />
                                </div>
                                <h3>
                                    <Link href="/feature-details">
                                    Des services et produits sur mesure
                                    </Link>
                                </h3>
                                <p>Nous proposons des services et des produits conçus sur mesure pour répondre à vos besoins spécifiques et à ceux de vos clients.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Box />
                                </div>
                                <h3>
                                    <Link href="/feature-details">
                                    Suivi des appels d'offre
                                    </Link>
                                </h3>
                                <p>Nous fournissons des tableaux de bord intuitifs pour vous aider à suivre et à enregistrer l'évolution des offres et de leur performance.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Bell />
                                </div>
                                <h3>
                                    <Link href="/feature-details">
                                    Ressources et tendances du marché
                                    </Link>
                                </h3>
                                <p>Nous fournissons des liens vers des ressources utiles pour vous aider à vous informer et à suivre les tendances et les évolutions du marché.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurFeatures;  