import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ContactUs.css';

class ContactUs extends Component {

    handleContactButtonClick = (e) => {
        e.preventDefault();

        toast.success('Thank you for contacting us!', {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    render() {
        return (
            <div>
                <section className="contact" id="contact-section">
                    <h2 className="heading">
                        Contact <span className="highlight">me</span>
                    </h2>
                    <p className="sub-heading">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className="seperator"></div>

                    <div className="contact-form">
                        <form>
                            <input
                                type="text"
                                name="user_name"
                                className="user_name"
                                placeholder="Name (optional)"
                            />

                            <input type="email" required name="user_email" className="email" placeholder="email" />
                            <textarea name="message" className="message" placeholder="message" required></textarea>
                            <button className="btn contact-btn" onClick={this.handleContactButtonClick}>
                                Contact
                            </button>
                        </form>
                    </div>
                </section>

                <footer className="footer">Thank you for visiting my profile</footer>

                <ToastContainer />
            </div>
        );
    }
}

export default ContactUs;
