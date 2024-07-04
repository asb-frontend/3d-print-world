import React, { useEffect, useState } from "react";
import Button from "../Button/Button"
import s from "./Newsletter.module.css";

const Newsletter = ({ userEmail }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (userEmail) {
      setEmail(userEmail);
    }
  }, [userEmail]);

  const handleSubmit = () => {
    if (email) {
      console.log(`Submitting email: ${email}`);
      // Replace with the actual email submission logic
    } else {
      console.log("Email field is empty");
    }
  };

  return (
    <div className={s.nlContainer}>
      <div className={s.nlInput}>
        <div>Sign up for our newsletter!</div>
        <input
          type="email"
          id="email-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="button">Subscribe</Button>
      </div>
      <div className={s.nlVideos}>
        <div className={s.videoContainer}>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={s.videoContainer}>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={s.videoContainer}>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/VIDEO_ID_3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
