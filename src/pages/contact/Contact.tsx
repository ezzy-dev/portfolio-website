import React from "react";
import "./Contact.scss";

function Contact(): JSX.Element {
  return (
    <div className="contact">
      <div className="contact__left">
        <h1 className="contact__heading">Contact Me!</h1>
        <p className="contact__description">
          Want to contact me for any reason? Please feel free to reach out using
          any of the contact information provided and I&rsquo;ll get back with
          you as soon as I can!
        </p>
      </div>
      <div className="contact__right">
        <h2>Email(s)</h2>
        <a className="contact__primary-email" href="mailto:jordanrwm@gmail.com">
          Primary: jordanrwm@gmail.com
        </a>
        <br />
        <a className="contact__item" href="mailto:myers3jr@mail.uc.edu">
          Secondary: myers3jr@mail.uc.edu
        </a>
        <h2>Telephone</h2>
        <a className="contact__item" href="tel:5137160356">
          (513) 716-0356
        </a>
        <h2>GitHub</h2>
        <a className="contact__item" href="https://github.com/ezzy-dev">
          Click here to view my GitHub
        </a>
        <h2>LinkedIn</h2>
        <a
          className="contact__item"
          href="https://www.linkedin.com/in/jordan-myers-366067184/"
        >
          Click here to view my LinkedIn page
        </a>
      </div>
    </div>
  );
}

export default Contact;
