import { Button, Card, withStyles, Checkbox } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles";

const Post = ({
  classes,
  postDetails,
  handleEdit,
  showActions,
  deletePost,
  handleCheckboxClick,
  checked,
}) => (
  <Card className={classes.postCard}>
    <div class={classes.verticalLine}></div>
    <div>
      <div className={classes.date}>
        {new Date(postDetails.timestamp).toDateString()}
      </div>
      <h2 className={classes.postTitleHeading}>
        <Link to={`/post/${postDetails.id}`} className={classes.postTitle}>
          {" "}
          {postDetails.title}
        </Link>
      </h2>
      <p className={classes.description}>{postDetails.text}</p>
      {showActions && (
        <div>
          <Checkbox
            checked={checked}
            color="primary"
            onChange={() => handleCheckboxClick(postDetails.id)}
          />
          <Button
            color="primary"
            className={classes.actionButton}
            onClick={() => handleEdit(postDetails)}
          >
            Edit
          </Button>
          <Button
            color="primary"
            className={classes.actionButton}
            onClick={() => deletePost(postDetails.id)}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  </Card>
);

export default withStyles(styles)(Post);
