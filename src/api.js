import sleep from "sleep-promise";

export function fetchPost(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(sleep(1000))
    .then(result => result.json())
}

export function fetchAllPosts() {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(sleep(2000))
    .then(result => result.json())
}
