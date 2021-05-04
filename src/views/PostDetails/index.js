import { Button, Card, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import PrimaryHeader from "../../components/Header/PrimaryHeader";
import Post from "../../components/Post";
import { getCall } from "../../utils/helpers";

import styles from "./styles";

const PostDetails = ({ classes, history, match }) => {
  const emptyPost = {
    title: "",
    description: "",
  };
  const [postDetails, setPostDetails] = useState(emptyPost);

  const fetchPost = () => {
    const { postId } = match.params;
    getCall(`/${postId}`).then((res) => {
      const post = res.data;
      setPostDetails(post);
    });
  };

  useEffect(fetchPost, emptyPost);

  return (
    <div>
      <PrimaryHeader history={history} />
      <div className={classes.postContainer}>
        {postDetails.title !== "" ? (
          <Post postDetails={postDetails} allowActions={false} />
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(PostDetails);
