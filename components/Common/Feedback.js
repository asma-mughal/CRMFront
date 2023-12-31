import React from 'react';
import Slider from "react-slick";
import * as Icon from 'react-feather';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="next-arrow slick-arrow"
            onClick={onClick}
        >
            <Icon.ArrowRight />
        </button>
    );
}
  
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button 
            className="prev-arrow slick-arrow"
            onClick={onClick}
        >
            <Icon.ArrowLeft />
        </button>
    );
}

class Feedback extends React.Component {
    state = {
        imagesSlider: null,
        thumbnailsSlider: null,
        oldSlide: 0,
        activeSlide: 0,
        activeSlide2: 0
    };
    
    componentDidMount() {
        this.setState({
            imagesSlider: this.slider1,
            thumbnailsSlider: this.slider2
        });
    }

    renderSliderFullContent = () => {
        return DEFAULT_PROPS.map(({name,profession,image,content}) => {
            return (
                <div key={name}>
                    <div className="item">
                        <div className="single-feedback">
                            <div className="client-img">
                                <img src={image} alt="image" />
                            </div>
                            <h3>{name}</h3>
                            <span>{profession}</span>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderSliderImages = () => {
        return DEFAULT_PROPS.map(({name, image}) => {
            return (
                <div key={name}>
                    <div className="item">
                        <div className="img-fill">
                            <img src={image} alt="client" />
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        const sliderSettings1 = {
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            fade: true,
            autoplay: true,
            draggable: true,
            asNavFor: this.state.thumbnailsSlider,
            draggable: false,
            arrows: false,
            nextArrow: false,
            prevArrow: false
        }
        
        const sliderSettings2 = {
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplay: true,
            centerMode: true,
            draggable: false,
            focusOnSelect: true,
            asNavFor: this.state.imagesSlider,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: (current, next) => this.setState({ oldSlide: current, activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        }

        return (
            <>
                <section className="feedback-area ptb-80 bg-f7fafd">
                    <div className="container">
                        <div className="section-title">
                            <h2>Ce que disent les utilisateurs</h2>
                            <div className="bar"></div>
                            <p>Nous sommes fiers de partager ces réactions positives de nos clients sur l'utilisation de nos fonctionnalités pour rechercher, analyser et préparer des offres compétitives, présenter leurs services et produits sur mesure, obtenir des avis clients, suivre les appels d'offres et rester informés des tendances du marché.</p>
                        </div>

                        <div className="feedback-slides">
                            <div className="client-feedback">
                                <div>
                                    <Slider
                                        ref={slider => (this.slider1 = slider)}
                                        {...sliderSettings1}
                                    >
                                        {
                                            this.renderSliderFullContent()
                                        }
                                    </Slider>
                                </div>
                            </div>

                            <div className="client-thumbnails">
                                <div>
                                    <Slider
                                        ref={slider => (this.slider2 = slider)}
                                        {...sliderSettings2}
                                    >
                                        {
                                            this.renderSliderImages()
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape1">
                        <img src="/images/shape1.png" alt="shape" />
                    </div>
                    <div className="shape2 rotateme">
                        <img src="/images/shape2.svg" alt="shape" />
                    </div>
                    <div className="shape4">
                        <img src="/images/shape4.svg" alt="shape" />
                    </div>
                    <div className="shape5">
                        <img src="/images/shape5.png" alt="shape" />
                    </div>
                    <div className="shape6 rotateme">
                        <img src="/images/shape4.svg" alt="shape" />
                    </div>
                    <div className="shape7">
                        <img src="/images/shape4.svg" alt="shape" />
                    </div>
                    <div className="shape8 rotateme">
                        <img src="/images/shape2.svg" alt="shape" />
                    </div>
                </section>
            </>
        );
    }
}

const DEFAULT_PROPS = [
    {
        name: 'David Gale', 
        profession: 'Directeur des achats',
        image: '/images/client-image/client2.jpg', 
        content:  "Je suis très satisfait des outils d'analyse fournis par le service qui m'ont permis de préparer des offres compétitives et adaptées à mes exigences."
    },
    {
        name: 'Sylvain leyani', 
        profession: 'Directeur commercial',
        image: '/images/client-image/client4.jpg', 
        content: "Les conseils de l'équipe m'ont été très précieux pour rédiger des offres convaincantes et pour présenter mon entreprise sous un bon jour."
    },
    {
        name: 'Nicky Parsons', 
        profession: 'Fictional Character',
        image: '/images/client-image/client1.jpg', 
        content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Habibe cissé', 
        profession: 'Directeur marketing',
        image: '/images/client-image/client5.jpg', 
        content: "Je suis très satisfait des outils d'aide à la présentation des offres, en particulier les vidéos et les graphiques, qui ont donné à mes offres une présentation visuelle claire et attrayante."
    },
    {
        name: 'Gennady Korotkevich', 
        profession: 'Directeur des ventes',
        image: '/images/client-image/client3.jpg', 
        content: "Les témoignages des clients m'ont été très utiles pour témoigner de la qualité des services proposés."
    },
    {
        name: 'Petr Mitrichev', 
        profession: 'Directeur des opérations',
        image: '/images/client-image/client3.jpg', 
        content: "Les résultats détaillés sur les appels d'offres m'ont permis de suivre la performance et de surveiller l'évolution des offres."
    },
    {
        name: 'Vincent W. Barton', 
        profession:  'Directeur général',
        image: '/images/client-image/client2.jpg', 
        content: "Les ressources et les informations proposées sur les tendances du marché m'ont aidé à rester à jour et à faire évoluer ma stratégie."
    },
    {
        name: 'Lisa bourdon', 
        profession: 'Responsable des projets',
        image: '/images/client-image/client1.jpg', 
        content: "Les informations sur les services et les produits proposés, ainsi que leurs avantages et leurs caractéristiques, m'ont été très utiles pour comprendre comment mieux répondre aux attentes des clients."
    }
];

export default Feedback;
