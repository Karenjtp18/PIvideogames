import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchBar } from "../../redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const dispatchName = (e) => {
    e.preventDefault();
    dispatch(searchBar(name));
  };

  return (
    <div className={style.container}>
      <form>
        <input
          type="text"
          placeholder="NAME VIDEOGAME"
          onChange={handleSearch}
          value={name}
          className={style.input}
        />
        <button className={style.button} onClick={(e) => dispatchName(e)}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
