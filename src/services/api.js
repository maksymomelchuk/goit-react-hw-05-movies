import axios from 'axios';

const API_KEY = 'fc5d692a2d0f42e5af832afd0b70affe';

const fetchTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

const fetchById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchActors = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchByName = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return response.data;
};

export { fetchTrending, fetchById, fetchActors, fetchReviews, fetchByName };
