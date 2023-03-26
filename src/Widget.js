import React from "react";
import "./widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import { Search } from "@mui/icons-material";

const Widget = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1626954399368069121"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ali_numan431"
          options={{ height: 400 }}
        />
        <TwitterShareButton />
      </div>
    </div>
  );
};

export default Widget;
