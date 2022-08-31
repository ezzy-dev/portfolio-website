import React from "react";
import "./Contact.scss";

function Contact(): JSX.Element {
  return (
    <div className="contact">
      <div className="contact__left">
        <h1>Contact Me!</h1>
        <p className="contact__description">
          Want to contact me for any reason? Please feel free to reach out using
          any of the contact information provided and I&rsquo;ll get back with
          you as soon as I can!
        </p>
      </div>
      <div className="contact__right">
        <h2>Email(s)</h2>
        <p className="contact__item">
          Primary: jordanrwm@gmail.com
          <br />
          Secondary: myers3jr@mail.uc.edu
        </p>
        <h2>Telephone</h2>
        <p className="contact__item">(513) 716 - 0356</p>
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
