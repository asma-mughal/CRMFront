import React from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Team = () => {
    return (
        <>
            <div className="team-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Notre formidable équipe</h2>
                        <div className="bar"></div>
                        <p>Notre équipe est composée de professionnels hautement qualifiés avec une vaste expérience dans leur domaine. Ils sont réunis dans une seule et même entreprise pour offrir des services de qualité à nos clients et atteindre nos objectifs. Nous travaillons ensemble pour assurer que nos produits et nos services répondent aux attentes de nos clients et à leurs besoins.</p>
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
                        },
                        1500: {
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="team-slider"
                >
                    <SwiperSlide>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="/images/team-image/team1.jpg" alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Sissoko Ousmane</h3>
                                    <span>CEO & Fondateur</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.gitlab.com/" target="_blank">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Sissoko Ousmane avec dix ans d'expérience dans l'entreprenariat a décidé de relever un nouveau défi et d'utiliser l'intelligence artificielle pour créer une application Web de gestion des appels d'offres afin de soutenir le développement de ses activités. Il est passionné et a le souci de fournir des produits et des services qui répondent aux attentes de ses clients. Sa mission est de fournir une solution de gestion des appels d'offres aussi efficace et pratique que possible. </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="/images/team-image/team2.jpg" alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Sissoko Ibrahima</h3>
                                    <span>Ingenieur Commercial en appel d'offres</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.gitlab.com/" target="_blank">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Sissoko Ibrahima possède près de 10 ans d'expérience en tant que manager et responsable de service de gestion des appels d'offres. Il est également commercial et est passionné par son travail. Sa mission est de fournir des solutions de gestion des appels d'offres innovantes et efficaces pour aider ses clients à développer leurs activités. Faisant preuve de perspicacité et de détermination, il est déterminé à s'assurer que son service de gestion des appels d'offres réponde aux besoins et aux attentes de ses clients. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="/images/team-image/team3.jpg" alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Sissoko Moussa</h3>
                                    <span>Developer Full stack</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.gitlab.com/" target="_blank">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Sissoko Moussa est un développeur informatique full-stack passionné par le développement web et l'intelligence artificielle. Il a des années d'expérience dans le développement d'applications web et d'applications mobiles. Il est motivé par la technologie et le développement de produits innovants qui peuvent aider les clients à améliorer leurs activités. Son but est de fournir des solutions technologiques convaincantes et fiables qui peuvent résoudre des problèmes complexes et aider ses clients à atteindre leurs objectifs. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="/images/team-image/team4.jpg" alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Paul  langlois</h3>
                                    <span>UX/UI Designer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.gitlab.com/" target="_blank">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Paul Langlois est un designer UX/UI expérimenté qui a des années d'expérience dans le secteur. Il est passionné par la conception et la réalisation de produits convaincants qui offrent une expérience utilisateur optimale. Il est motivé par l'utilisation de la technologie pour créer des solutions qui répondent aux besoins de ses clients et qui les aident à atteindre leurs objectifs. Son but est de fournir un produit qui est à la fois intuitif et fonctionnel et qui répond aux besoins du marché. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="/images/team-image/team5.jpg" alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Sissoko Youssouf</h3>
                                    <span>Ingenieur logiciel</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.gitlab.com/" target="_blank">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Sissoko Youssouf est ingénieur logiciel depuis plus de 10 ans et est spécialisé dans le développement logiciel en web et embarqué. Il possède une vaste expérience dans le développement de produits et de services informatiques et sait comment intégrer des solutions innovantes dans ses produits. Il est déterminé à fournir des solutions fiables et bien pensées qui répondent aux besoins de ses clients et qui les aident à atteindre leurs objectifs. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    
                    
                </Swiper>
            </div>
        </>
    )
}

export default Team;