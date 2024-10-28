export function postUrl(post) {
  const postUrl = `post/index.html?id=${post.id}`;
  window.location.href = postUrl;
  return postUrl;
}

export function editPostUrl(post) {
  const postUrl = `/post/edit/index.html?id=${post.id}`;
  window.location.href = postUrl;
  return postUrl;
}
