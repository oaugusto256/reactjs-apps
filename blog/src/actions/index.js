import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=otavio123';

export const FETCH_POSTS = 'fetch_posts';


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}