import React from 'react';
import Link from 'next/link';

const CTAStyleTwo = () => {
    return (
        <>
            <div className="agency-cta-area ptb-80">
                <div className="container">
                    <div className="agency-cta-content">
                        <h2>Voulez-vous augmenter votre chiffre d'affaires et réaliser des économies ?</h2>

                        <Link href="/contact" className="btn btn-gradient">
                        Nous contacter
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CTAStyleTwo;