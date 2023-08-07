const { Router } = require("express");
const getGameQuery = require("../Controllers/getGameQuery");
const getGamesParams = require("../Controllers/getGamesParams");
const getGenres = require("../Controllers/getGenres");
const postGames = require("../Controllers/postGames");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getGameQuery);
router.get("/videogames/:idVideogame", getGamesParams);
router.get("/genres", getGenres);
router.post("/videogames", postGames);

module.exports = router;
