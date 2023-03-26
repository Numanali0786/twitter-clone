import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { db } from "./firebase";
import "./TweetBox.css";

const TweetBox = () => {
  const [tweetMessaage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    console.log(tweetMessaage, tweetImage);
    // add to db
    db.collection("posts").add({
      displayName: "Numan Ali",
      userName: "numan@431",
      verified: true,
      text: tweetMessaage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/ogw/AAEL6sjEqCDRg2sGx4z_o_BzDUIsUoIFV1ZCYyDzOWchPw=s32-c-mo",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/AAEL6sjEqCDRg2sGx4z_o_BzDUIsUoIFV1ZCYyDzOWchPw=s32-c-mo" />
          <input
            type="text"
            placeholder="whats happening?"
            value={tweetMessaage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__inputImage"
          type="text"
          placeholder="Optional: Enter Image Url"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
