import { Fab, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import Header from "../../components/Header";
import PostModal from "../../components/PostModal";
import Post from "../../components/Post";
import { deleteCall, getCall, postCall, putCall } from "../../utils/helpers";
import styles from "./styles";

const Home = ({ classes, history }) => {
  const [posts, setPosts] = useState([]);
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [postDetails, setPostDetails] = useState({
    title: "",
    description: "",
  });
  const [type, setType] = useState("new");
  const [postsSelected, setPostsSelected] = useState([]);

  const fetchPosts = () => {
    getCall("/").then((res) => {
      const posts = res.data;
      setPosts(posts);
    });
  };

  const toggleModal = () => {
    setIsNewPostModalOpen(!isNewPostModalOpen);
  };

  const onSubmit = (title, text) => {
    if (type === "edit") {
      putCall(`/${postDetails.id}`, {
        ...postDetails,
        title: title,
        text: text,
      }).then(() => {
        setIsNewPostModalOpen(false);
        fetchPosts();
      });
    } else {
      postCall("/posts", { title, text }).then(() => {
        setIsNewPostModalOpen(false);
        fetchPosts();
      });
    }
  };

  const onNewPostClick = () => {
    setPostDetails({ title: "", description: "" });
    setType("new");
    setIsNewPostModalOpen(true);
  };

  const handleEdit = (post) => {
    setPostDetails(post);
    setType("edit");
    setIsNewPostModalOpen(true);
  };

  const deletePost = (id) => {
    deleteCall(`/${id}`).then(fetchPosts);
  };

  const handleCheckboxClick = (id) => {
    const index = postsSelected.indexOf(id);
    if (index === -1) {
      setPostsSelected([...postsSelected, id]);
    } else {
      let currentPostsSelected = [...postsSelected];
      currentPostsSelected.splice(index, 1);
      setPostsSelected(currentPostsSelected);
    }
  };

  const onBulkDelete = () => {
    const ids = postsSelected
      .reduce((id, sum) => sum + "," + id, "")
      .slice(0, -1);
    deleteCall(`/bulkDelete?ids=${ids}`).then(() => {
      setPostsSelected([]);
      fetchPosts();
    });
  };

  useEffect(fetchPosts, []);
  return (
    <div>
      <Header toggleModal={onNewPostClick} history={history} />
      <div className={classes.postsContainer}>
        {postsSelected.length !== 0 && (
          <Fab
            color="primary"
            aria-label="delete"
            className={classes.deleteIcon}
            onClick={onBulkDelete}
          >
            <DeleteIcon />
          </Fab>
        )}
        {posts.map((post) => (
          <Post
            key={post.id}
            postDetails={post}
            handleEdit={handleEdit}
            showActions={true}
            deletePost={deletePost}
            handleCheckboxClick={handleCheckboxClick}
            checked={postsSelected.includes(post.id)}
          />
        ))}
      </div>
      {isNewPostModalOpen && (
        <PostModal
          onClose={toggleModal}
          initialPostDetails={postDetails}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(Home);
