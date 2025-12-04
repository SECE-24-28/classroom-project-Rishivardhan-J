import React from "react";
import "./App.css";
import art from "./assets/get_in_touch.jpg"; // or .jpg if yours is jpg

export default function GetInTouch() {
  return (
    <section className="getintouch">
      <div className="getintouch-bg-circle" aria-hidden="true" />

      <div className="getintouch-inner">
        <div className="getintouch-text">
          <h1 className="getintouch-title">GET IN TOUCH</h1>
          <p className="getintouch-sub">
            Have questions or feedback? We're here to help. <br />
            Send us a message and we'll respond soon.
          </p>
          <button className="getintouch-btn">Contact Us</button>
        </div>

        <div className="getintouch-art">
          <div className="getintouch-art-circle">
            <img src={art} alt="Get in touch illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}
