import React from 'react'; 

const NewsletterStyleTwo = () => {
    return (
        <>
            <div className="newsletter-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="newsletter-image">
                                <img src="/images/bigdata-analytics/newsletter.jpg" alt="image" />
                            </div>
                        </div>
        
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="newsletter-content">
                                <h2>Commencez votre essai gratuit</h2>

                                <form className="newsletter-form">
                                    <input type="email" className="input-newsletter" placeholder="Enter your business email here" />
                                    <button type="submit">S'inscrire gratuitement</button>
                                </form>
                                
                                <p>Testez les fonctionnalités de Big Data Analytics pendant 14 jours, sans carte de crédit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsletterStyleTwo;  