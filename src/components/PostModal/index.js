import { Button, Card, Modal, TextField, withStyles } from "@material-ui/core";
import React, { useState } from "react";

import styles from "./styles";

const PostModal = ({ classes, onClose, initialPostDetails, onSubmit }) => {
  const [title, setTitle] = useState(initialPostDetails.title);
  const [description, setDescription] = useState(initialPostDetails.text);
  return (
    <Modal className={classes.modal} open={true} onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(title, description);
        }}
      >
        <Card className={classes.paper}>
          <h3>What's on your mind?</h3>
          <TextField
            multiline
            className={classes.textField}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            multiline
            className={classes.textField}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Card>
      </form>
    </Modal>
  );
};

export default withStyles(styles)(PostModal);
