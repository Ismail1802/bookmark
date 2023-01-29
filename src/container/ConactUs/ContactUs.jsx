import React, { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div id="contact" className="app__contactus">
      <div className="app__contactus_text">
        <p className="app__contactus_text-joined">35,000+ already joined</p>
        <p className="app__contactus_text-stay">
          Stay up-to-date with what we’re doing
        </p>
      </div>
      <form onSubmit={submitHandler} className="app__contactus_input">
        <input
          value={email}
          placeholder="Enter your email address"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Contact Us</button>
      </form>
    </div>
  );
};

export default ContactUs;
