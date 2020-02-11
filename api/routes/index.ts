import { Router } from "express";

import movieRoutes from "./movies";

const router = Router();

router.use("/movies", movieRoutes);

export default router;
