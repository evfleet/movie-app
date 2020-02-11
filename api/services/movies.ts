import fetch from "isomorphic-unfetch";

import redis from "../config/redis";

class MovieService {
  async getCurrentMovies() {
    try {
      const cacheKey = "current-movies";
      const cachedMovies = await redis.getAsync(cacheKey);

      if (cachedMovies) {
        return JSON.parse(cachedMovies);
      }

      const movies = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&region=US`
      ).then(r => r.json());

      redis.setAsync(cacheKey, JSON.stringify(movies), "EX", 3600);

      return movies;
    } catch (error) {
      throw error;
    }
  }
}

export default MovieService;
