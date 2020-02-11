import MovieService from "../services/movies";

class MovieController {
  movieService: MovieService;

  constructor() {
    this.movieService = new MovieService();
  }

  getCurrent = async (req, res) => {
    try {
      const { results } = await this.movieService.getCurrentMovies();

      return res.json({
        results
      });
    } catch (error) {
      console.log(error);

      return res.send({
        error: true,
        message: error.message
      });
    }
  };
}

export default MovieController;
