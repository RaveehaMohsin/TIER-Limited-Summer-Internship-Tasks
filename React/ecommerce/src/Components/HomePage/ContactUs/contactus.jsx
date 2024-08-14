import React from 'react';
import "./contactus.css";

export default function ContactUs() {
  return (
    <div>     
      <section id="contact" className="contact">
        <h2>Contact Us!</h2>
        <div className="contactform">
          <div className="form-group">
            <label>Name</label> 
            <input type="text" className="form-control" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" rows="5" placeholder="Any Message?" required></textarea>
          </div>
          
          <div>
            <button className="btn btn-success" type="submit" style={{marginRight:"10px"}}>Submit</button>
            <button className="btn btn-primary" type="reset">Clear</button>
          </div>
        </div>
      </section>
    </div>
  );
}
