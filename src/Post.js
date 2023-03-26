import React, { forwardRef } from "react";

import { Avatar } from "@mui/material";
import { GoVerified } from "react-icons/go";
import { Favorite, Publish, Repeat, ChatBubble } from "@mui/icons-material";
import "./post.css";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <GoVerified className="post__badge" />}@
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubble fontSize="small" />
            <Repeat fontSize="small" />
            <Favorite fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
