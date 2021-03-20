// import all the action types from './types';
import { PostsData } from './Posts/PostsData'
import {
  FETCH_POSTS
} from './types';

export const createPost = (postData) => dispatch => {
  fetch(PostsData, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(r => r.json())
  .then(post => {
    console.log(post, 'THIS IS THE POST!!');
    // dispatch({
    //   type: FETCH_POSTS,
    //   payload: post
    // })
  });
}