import axios from "axios";

import { API_BASE_URL } from "../apiConfig";
import postData from "../data/posts";

export const getCall = (path) => {
  // Commented as the API is down
  // let URL = API_BASE_URL + path;
  // return axios.get(URL);
  if (path === "/") {
    return Promise.resolve({ data: [...postData] });
  }
  const postId = Number(path.split("/")[1]);
  return Promise.resolve({ data: postData[postId - 1] });
};

export const postCall = (path, data) => {
  // Commented as the API is down
  // let URL = API_BASE_URL + path;
  // return axios.post(URL, data);

  const newPost = {
    ...data,
    id: postData[postData.length - 1].id + 1,
    timestamp: new Date().toISOString(),
  };
  postData.push(newPost);
  return Promise.resolve();
};

export const putCall = (path, data) => {
  // Commented as the API is down
  // let URL = API_BASE_URL + path;
  // return axios.put(URL, data);

  const id = path.split("/")[1];
  const postToEdit = postData.find((post) => post.id === Number(id));
  postToEdit.title = data.title;
  postToEdit.text = data.text;
  return Promise.resolve();
};

export const deleteCall = (path) => {
  // Commented as the API is down
  // let URL = API_BASE_URL + path;
  // return axios.delete(URL);

  if (path.includes("bulkDelete")) {
    const ids = path.split("=")[1].split(",");
    ids.forEach((id) => {
      const postToDelete = postData.find((post) => post.id === Number(id));
      const indexToDelete = postData.indexOf(postToDelete);
      postData.splice(indexToDelete, 1);
    });
    return Promise.resolve();
  } else {
    const id = path.split("/")[1];
    const postToDelete = postData.find((post) => post.id === Number(id));
    const indexToDelete = postData.indexOf(postToDelete);
    postData.splice(indexToDelete, 1);
    return Promise.resolve();
  }
};
