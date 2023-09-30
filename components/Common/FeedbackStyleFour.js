import React from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackStyleFour = () => {
    return (
        <>
            <div className="ml-feedback-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Commentaires de nos clients</h2>
                        <div className="bar"></div>
                        <p>"Ce projet est très intéressant car il intègre un système de vérification des offres par des spécialistes à partir d'une certaine phase, ce qui me donne plus de confiance et de sécurité dans la réalisation de l'offre."</p>
                    </div>

                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="ml-feedback-slides"
                    >
                        <SwiperSlide>
                            <div className="single-ml-feedback-item">
                                <div className="client-info">
                                    <img src="/images/client-image/client1.jpg" alt="image" />
                                    <h3>Sarah Taylor</h3>
                                    <span>CEO</span>
                                </div>
                                <p>C'est une solution géniale pour répondre aux appels d'offre avec une intelligence artificielle qui est capable de fournir une offre complète et détaillée !</p>

                                <div className="rating">
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-feedback-item">
                                <div className="client-info">
                                    <img src="/images/client-image/client2.jpg" alt="image" />
                                    <h3>Steven Langlois</h3>
                                    <span>Resp marché public</span>
                                </div>
                                <p>"L'intelligence artificielle est capable d'identifier les risques et d'élaborer des plans pour les gérer, ce qui est très pratique et sécurisant."</p>

                                <div className="rating">
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-feedback-item">
                                <div className="client-info">
                                    <img src="/images/client-image/client3.jpg" alt="image" />
                                    <h3>Eric Eva</h3>
                                    <span>CEO at Envato</span>
                                </div>
                                <p>"La possibilité de rechercher directement les besoins et les attentes des clients et d'intégrer ces informations dans l'offre m'apporte beaucoup de flexibilité !"</p>

                                <div className="rating">
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default FeedbackStyleFour;