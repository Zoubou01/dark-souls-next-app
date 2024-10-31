import { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const StepTwo = () => {


    // Request MovieList
    const [movies, setMovies] = useState([] as any[]);

      // Search Bar
  const [searchValue, setSearchValue] = useState("Lord of the Rings");

  const selectedRadioBtn = useSelector((state:any) => state.bonfire.radio)

    const getMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4fb6c6fc&type=${selectedRadioBtn}`;
    
        const response = await fetch(url);
        const responseJson = await response.json();
    
        if (responseJson.Search) {
          setMovies(responseJson.Search);
        }
      };


    return (


<>
        <div className="flex flex-row">
        <div className="inline-flex flex-col mt-5 mb-5">
        <button color="danger" >
        <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-white dark:text-white">May i have the tittle of the movie, Undead?</label>
        <input
          className="pl-3 bg-black border border-black text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="helper-text"
          placeholder="Lord of the rings?"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        </button>
        
        <button className="mt-3 mb-5 flex justify-center text-white" color="danger" onClick={getMovieRequest}>
          Search
        </button>
        </div>
        </div>
        <div className="overflow-y-auto" style={{height:"70vh"}}>
        <MovieList movies={movies}/>
        </div>
        </>
        
    )
}

export default StepTwo