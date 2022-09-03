import "./contact.scss";

import React, { useEffect, useRef, useState } from "react";
import Loaderr from "../Loader/loader";
import AnimatedLetters from "../AnimatedLetters";
import ContactButton from "./contact_button";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eykh9s3",
        "template_ttexlbl",
        form.current,
        "t4Y86TybWUIY7PHoz"
      )
      .then(
        () => {
          alert("Your message has been received");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send your message");
        }
      );
  };

  return (
    <div>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"]}
              idx={1}
            />
          </h1>
          <p>
            I am available for freelance projects. I am skilled at
            flutter-firebase, react-node related projects. Dont hesitate to
            contact me.
          </p>
          <br />
          <ContactButton type="phone" tel="9818030504" title="Phone" />
          <br />
          <ContactButton
            type="mail"
            title="E-mail"
            email="mirojrai01@gmail.com"
          />
          <br />
          <br />
          <h4>Reach me via: </h4>
          <br />
          <div className="icon-container">
            <ul>
              <li>
                <a href="https://www.facebook.com/Mirojchamlin" id="facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/MirojRai" id="twitter">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/miroj__rai/" id="insta">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/miroj-rai-0942a821a/"
                  id="linkedin"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" placeholder="Name" name="name" required />
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  required
                />
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Loaderr />
    </div>
  );
}

export default Contact;
