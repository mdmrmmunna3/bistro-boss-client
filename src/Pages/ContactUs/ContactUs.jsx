import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import contactCover from "../../assets/contact/contact.jpg"
import OurLocation from "../Dashboard/Reservation/OurLocation";
import HeadingTitel from "../../components/HeadingTitel/HeadingTitel";
import ContactForm from "./ContactForm";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>

            <div className="uppercase">
                <Cover
                    img={contactCover}
                    titel="Contact Us"
                    details="Would You like to Contact Us?"
                ></Cover>
            </div>

            {/* loaction part  */}
            <div className="mx-4 md:mx-16 lg:mx-28">
                {/* common heading  */}
                <HeadingTitel subHeading="Visit Us" heading="Our Location"></HeadingTitel>
                <OurLocation></OurLocation>
            </div>

            {/* contact form part  */}
            <div className="mx-4 md:mx-16 lg:mx-28">
                {/* common heading  */}
                <HeadingTitel subHeading="Send Us a Message" heading="Contact Form "></HeadingTitel>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactUs;