import React, { useState } from "react";
import axios from "axios";
import Link from 'next/link';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
      title: "Félicitations!",
      text: "Votre message a été envoyé avec succès et nous vous répondrons bientôt.",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };
  
  // Form initial state
  const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: "",
  };

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));
        // console.log(contact)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="contact-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Nous contacter</h2>
                        <div className="bar"></div>
                        <p>Tout ce qui vous préoccupe. Nous serons heureux de vous aider!</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <img src="/images/contact-img.png" alt="image" />
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="nom" 
                                                placeholder="Votre nom" 
                                                className="form-control" 
                                                value={contact.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Votre adresse électronique" 
                                                className="form-control" 
                                                value={contact.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="number" 
                                                placeholder="Votre numéro de téléphone" 
                                                className="form-control" 
                                                value={contact.number}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Votre sujet" 
                                                className="form-control" 
                                                value={contact.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea 
                                                name="text" 
                                                cols="30" 
                                                rows="5" 
                                                placeholder="Rédigez votre message..." 
                                                className="form-control" 
                                                value={contact.text}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                            En cochant cette case, vous acceptez notre <Link href="/term-condition">Conditions</Link> et <Link href="/privacy-policy">Politique de confidentialité</Link>.
                                            </label>
                                        </div>
                                    </div>
                
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="btn btn-primary">Envoyer un message</button>
                                    </div>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;  