require("dotenv").config();
const { Genres } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getGenres = async (req, res) => {
  try {
    const URL_BASE = `https://api.rawg.io/api/genres?key=${API_KEY}`;

    const getGenresApi = await axios.get(URL_BASE);

    const genres = getGenresApi.data.results.map((g) => g.name);

    genres.forEach((element) => {
      Genres.findOrCreate({ where: { name: element } });
    });

    const AllGenres = await Genres.findAll();
    res.status(200).json(AllGenres);
  } catch (error) {
    res.status(404).send("error");
  }
};

module.exports = getGenres;
