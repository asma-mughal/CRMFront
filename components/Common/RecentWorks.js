import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const RecentWorks = () => {
    return (
        <>
            <div className="works-area pt-80 pb-50 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Nos fonctionnalités</h2>
                        <div className="bar"></div>
                        <p>Nous proposons une variété de fonctionnalités pour vous aider à rechercher, analyser et préparer des offres compétitives, à présenter des services et des produits conçus sur mesure, à obtenir des avis clients, à suivre les appels d'offres et à rester informé des tendances du marché.</p>
                    </div>
                </div>

                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        }
                    }}
                    modules={[Pagination, Autoplay]}
                    className="works-slides"
                >
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image1.jpg" alt="image" />

                            <Link href="/project-details" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                    Recherche rapide et efficace des appels d'offre
                                    </Link>
                                </h3>
                                <p>Une interface intuitive et conviviale pour rechercher les appels d’offre et trouver les possibilités de développement pour l’entreprise.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image2.jpg" alt="image" />

                            <Link href="/project-details" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                    Suivi des appels d'offre
                                    </Link>
                                </h3>
                                <p>Des liens vers des ressources utiles pour s’informer et se tenir au courant des tendances et des évolutions du marché.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image3.jpg" alt="image" />

                            <Link href="/project-details" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                    Ressources et tendances du marché
                                    </Link>
                                </h3>
                                <p> Des résultats détaillés sur les appels d’offres pour suivre la performance et surveiller l’évolution des offres.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image4.jpg" alt="image" />

                            <Link href="/project-details" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                    Analyse et préparation des offres
                                    </Link>
                                </h3>
                                <p> Des outils d’analyse puissants pour évaluer et élaborer des offres compétitives et adaptées aux exigences et aux critères des appels d’offre.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image5.jpg" alt="image" />

                            <Link href="/project-details" className="icon">
                                <Icon.Settings />
                            </Link>
                            
                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details"> Présentation des prestations et compétences</Link>
                                </h3>
                                <p>Une vue d’ensemble sur les prestations proposées, les expériences acquises et les réalisations de l’entreprise.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                
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
    )
}

export default RecentWorks;
