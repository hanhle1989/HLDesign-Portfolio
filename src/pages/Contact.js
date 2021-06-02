import React from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_u374ku3', 'template_x75y5zm', e.target, 'user_5554MeGwDXAO4w2Q5ZBhG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div id="contact" className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="header contactHeader">GET IN TOUCH</h1>
          <p className="contactMessage">Wanna get in touch? Drop me a message using this form or call me at (206) 457-9305. I promise you're not going to hit a ridiculously long phone menu when you call me and your email isn't going to the inbox abyss, never to be seen or heard from again.</p>
        </div>

        <div className="col-8 contactForm py-5">
          <form onSubmit={sendEmail}>
            <div className="col-10 form-group flex-row ms-auto">
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="col-10 form-group pt-2 ms-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email" />
            </div>
            <div className="col-10 form-group pt-2 ms-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div>
            <div className="col-10 form-group pt-2 ms-auto">
              <textarea className="form-control" id="" cols="30" rows="5" placeholder="Your message" name="message"></textarea>
            </div>
            <div className="d-grid gap-2 col-10 ms-auto submitBtn">
              <input type="submit" className="btn btn-dark" value="Send Message"></input>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact