import React from "react";
import Cards from "../../Componentes/Cards/Cards";
import NavBar from "../../Componentes/NavBar/NavBar";
import { getAllGames, getGenres } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./Home.module.css";

function Home() {
  const videoGames = useSelector((state) => state.videoGames);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getAllGames()).then((res) => setLoading(false));
  }, [dispatch]);

  const gamesPage = 15; // Establecer aquí la cantidad de juegos por página.

  const indexOfLastGame = currentPage * gamesPage;
  const indexOfFirstGame = indexOfLastGame - gamesPage;
  const currentGames = videoGames.slice(indexOfFirstGame, indexOfLastGame);

  const totalPages = Math.ceil(videoGames.length / gamesPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const next = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={style.landing}>
      <div className={style.paginado}>
        <button className={style.unButton} onClick={prev}>
          PREV
        </button>
        {pageNumbers.map((number) => (
          <button
            className={style.unButton}
            key={number}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
        <button className={style.unButton} onClick={next}>
          NEXT
        </button>
      </div>
      <div className={style.main}>
        <div>
          <NavBar></NavBar>
          {loading ? (
            <div className={style.loadingContainer}>
              <h1>im loading</h1>
              <img
                src="https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif"
                alt="Cargando..."
                className={style.loadingImage}
              />
            </div>
          ) : (
            <div className={style.cardsContainer}>
              <Cards games={currentGames} />
            </div>
          )}
        </div>
        <div className={style.paginado}>
          <button className={style.unButtonAbajo} onClick={prev}>
            PREV
          </button>
          {pageNumbers.map((number) => (
            <button
              className={style.unButtonAbajo}
              key={number}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}
          <button className={style.unButtonAbajo} onClick={next}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
