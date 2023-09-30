import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo.png" alt="logo" />
                  </Link>
                </div>
                <p>
                Notre application de gestion des appels d'offres vous aide à trouver les offres qui vous conviennent, à améliorer votre processus de recherche et à générer des résultats impressionnants. 
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Entreprise</h3>
                <ul className="list">
                  <li>
                    <Link href="/about-2">À-propos</Link>
                  </li>
                  <li>
                    <Link href="/services-1">Services</Link>
                  </li>
                  <li>
                    <Link href="/features">Caractéristiques</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/blog-1">Dernière News</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Politique de confidentialité</Link>
                  </li>
                  <li>
                    <Link href="/term-condition">Conditions générales</Link>
                  </li>
                  <li>
                    <Link href="/team">L'équipe</Link>
                  </li>
                  <li>
                    <Link href="/contact">Nous contacter</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Addresse</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    66 avenue des champs elysées, Paris, <br /> Paris 75008, Paris
                  </li>
                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:contact@mansapro.com">contact@mansapro.com</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    Téléphone: <a href="tel:321984754">+ (33) 618746277</a>
                  </li>
                </ul>
                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} Mansapro. All rights reserved by {"sundiata-group"}
                  <a href="https://envytheme.com/" target="_blank">
                    
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/images/map.png" className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img src="/images/shape1.png" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
