import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';
 
const Login = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Login" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <img src="/images/logo.png" />
                            </Link>
                            <p>Vous n'avez pas encore de compte ?  <Link href="/sign-up">S'inscrire</Link></p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Mot de passe</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">
                                <p><Link href="/forgot-password">Mot de passe oublié</Link></p>
                            </div>

                            <button type="submit" className="btn btn-primary">Connexion</button>
                        </form>

                        <div className="foot">
                            <p>ou se connecter avec</p>
                            <ul>
                                <li>
                                    <a href="https://www.mail.com/" target="_blank">
                                        <Icon.Mail />
                                    </a>
                                </li>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Login;