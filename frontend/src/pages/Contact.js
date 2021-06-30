import GetInTouch from '../components/GetInTouch';
import ContactForm from '../components/ContactForm';
import ContactSocialMediaHandles from '../components/ContactSocialMediaHandles';

const Contact = () => {
    return (
        <div className="page mainContactPage">
            <h1>Contact</h1>
            <div className="contactPage">
                <div className="contact">
                    <GetInTouch />
                    <ContactSocialMediaHandles />
                </div>
                <div className="contactForm">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
