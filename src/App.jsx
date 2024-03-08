import axios from "axios";
import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [MovieData, setMovieData] = useState(null);

  async function search(searchTerm) {
    try {
      if (searchTerm === "") {
        var minm = 1000000;
        var maxm = 6999999;
        let randomNumber = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

        let response = await axios.get(
          `http://www.omdbapi.com/?apikey=${
            import.meta.env.API_KEY
          }&i=tt${randomNumber}`
        );
        console.log(response.data);
        setMovieData(response.data);
      } else {
        let response = await axios.get(
          `http://www.omdbapi.com/?apikey=${
            import.meta.env.API_KEY
          }&t=${searchTerm}`
        );
        console.log(response.data);
        setMovieData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    search("");
  }, []);

  return (
    <>
      <h1>My Movie App</h1>
      <Form getMovie={search} />
      <MovieDisplay movie={MovieData} />
    </>
  );
}

export default App;
