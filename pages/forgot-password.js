import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
 
const ForgotPassword = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Forgot Password" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <img src="/images/logo.png" />
                            </Link>
                            <p>Veuillez entrer vos informations pour recevoir un nouveau mot de passe</p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Réinitialiser le mot de passe</button>
                        </form>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default ForgotPassword;