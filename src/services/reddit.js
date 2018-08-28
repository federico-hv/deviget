
const serviceFetchPosts = () => {
  const url = 'https://www.reddit.com/r/all/top.json?limit=50';

  return fetch(url).then(res => {
    return res.json();
  });
};


export { serviceFetchPosts };