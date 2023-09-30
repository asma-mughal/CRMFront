import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Link from 'next/link';
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: "Félicitations!",
        text: "Votre message a été envoyé avec succès et nous vous répondrons bientôt.",
        icon: "succès",
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
            <div className="faq-contact">
                <h3>Posez votre question</h3>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Your Name" 
                                    className="form-control" 
                                    value={contact.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="Your email address" 
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
                                    placeholder="Your phone number" 
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
                                    placeholder="Your Subject" 
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
                                    rows="6" 
                                    placeholder="Write your message..." 
                                    className="form-control" 
                                    value={contact.text}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                En cochant cette case, vous acceptez notre <Link href="/term-condition">Conditions</Link> et <Link href="/privacy-policy">Privacy policy</Link>.
                                </label>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-12 text-center">
                            <button type="submit" className="btn btn-primary">Envoyer un message</button>
                        </div>
                    </div>
                </form> 
            </div>
        </>
    )
}

export default ContactForm;  