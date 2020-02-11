import { Router } from "express";

import MovieController from "../controllers/movies";

const router = Router();
const movieController = new MovieController();

router.get("/", (req, res) => {
  return res.json({
    test: "Hello from Movies API"
  });
});

router.get("/current", movieController.getCurrent);

export default router;
