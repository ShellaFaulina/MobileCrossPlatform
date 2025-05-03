import axios from "axios";

// Gantilah dengan URL API yang benar (bukan JSONPlaceholder)
const ENV = process.env.EXPO_PUBLIC_API_URL;
console.log(ENV);  // Cek apakah URL benar

export const getPosts = () => {
  return axios.get(`${ENV}posts`);  // GET posts
};

export const updatePost = (id, data) => {
    return axios.put(`${ENV}posts/${id}`, data);
  };
  
