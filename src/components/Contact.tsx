import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ShabanZafar@outlook.com" data-cursor="disable">
                ShabanZafar@outlook.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+923481819941" data-cursor="disable">
                +92 34818 19941
              </a>
            </p>
            <h4>LinkedIn</h4>
            <p>
              <a href="https://linkedin.com/in/ShabanZ" target="_blank" data-cursor="disable">
                linkedin.com/in/ShabanZ
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shaban Zafar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
