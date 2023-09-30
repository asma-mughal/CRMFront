import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactForm from './../components/FAQ/ContactForm';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
const FAQ = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="FAQ" />

            <div className="faq-area ptb-80">
                <div className="container">
                    <div className="faq-accordion">
                        <Accordion preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Quelle est la mission de votre service ?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Notre mission est de fournir une variété de fonctionnalités pour vous aider à rechercher, analyser et préparer des offres compétitives, à présenter des services et des produits conçus sur mesure, à obtenir des avis clients, à suivre les appels d'offres et à rester informé des tendances du marché.

                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Quels outils sont disponibles pour analyser et préparer des offres ?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Nous proposons des outils d'analyse puissants pour vous aider à évaluer et à élaborer des offres compétitives et adaptées aux exigences et aux critères des appels d'offres.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Comment puis-je suivre la performance et l'évolution des offres ?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Nous proposons des résultats détaillés sur les appels d'offres pour vous aider à suivre la performance et à surveiller l'évolution des offres.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        
                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Quels sont les avantages de votre service ? 
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Notre service propose une variété de fonctionnalités pour vous aider à rechercher, analyser et préparer des offres compétitives, à présenter des services et des produits conçus sur mesure, à obtenir des avis clients, à suivre les appels d'offres et à rester informé des tendances du marché.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Quel genre de soutien technique proposez-vous ?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Nous offrons un soutien technique complet et professionnel pour vous aider à utiliser nos fonctionnalités et à tirer le meilleur parti de nos services. Nous sommes à votre disposition pour répondre à toutes vos questions et à tous vos besoins.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Y a-t-il des garanties et des remboursements ?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Oui, nous proposons une variété de garanties et de remboursements pour vous assurer que vous êtes satisfait de notre service et de nos produits.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* ContactForm */}
                    <ContactForm />
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default FAQ;