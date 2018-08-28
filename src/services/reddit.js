
const serviceFetchPosts = () => {
  const url = '/data.json';

  return fetch(url).then(res => {
    return res.json();
  });
};


export { serviceFetchPosts };