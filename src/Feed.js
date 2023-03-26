import React, { useEffect, useState } from "react";
import "./feed.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";
import { db } from "./firebase.js";

// npm i react-flip-move
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, [posts]);
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* twitter box */}
      <TweetBox />

      {/* post */}
      <FlipMove>
        {posts.map((post) => {
          const { displayName, userName, verified, text, image, avatar } = post;

          return (
            <Post
              key={text}
              displayName={displayName}
              userName={userName}
              verified={verified}
              text={text}
              avatar={avatar}
              image={image}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
