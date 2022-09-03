import React from "react";
import "./contact.scss";

function ContactButton({ type, title, tel, email }) {
  if (type === "phone")
    return (
      <div className="contact-button">
        <h4>{title}</h4>
        <a href={"tel:" + tel}>{tel}</a>
      </div>
    );
  else if (type === "mail")
    return (
      <div className="contact-button">
        <h4>{title}</h4>
        <a href={"mailto:" + email}>{email}</a>
      </div>
    );
  else return;
}

export default ContactButton;
