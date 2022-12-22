import axios from 'axios';

export const fetchMovieApi = (setMovies) => {
  axios
    .get(
      'https://api.themoviedb.org/3/discover/movie?api_key=213c7bbc1cfe08d03255ea3de80c500e&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate',
    )
    .then((data) => setMovies(data.data.results))
    .catch((err) => console.log(err));
};

export const fetchSeriesApi = (setTvShows) => {
  axios
    .get(
      'https://api.themoviedb.org/3/discover/tv?api_key=213c7bbc1cfe08d03255ea3de80c500e&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate',
    )
    .then((data) => setTvShows(data.data.results))
    .catch((err) => console.log(err));
};

export const fetchMovieDetailApi = (setMovieDetails, id) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=213c7bbc1cfe08d03255ea3de80c500e&language=en-US`,
    )
    .then((data) => setMovieDetails(data.data))
    .catch((err) => console.log(err));
};
