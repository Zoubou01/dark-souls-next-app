import { useState } from "react";

const StepThree = (moviesStart:any) => {
    const [movies, setMovies] = useState([moviesStart] as any[]);

     // Sort buttons
    const isSortSelected = (value: string): boolean => selectedSortBtn === value;
    const handleSortClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
        setSelectedSortBtn(e.currentTarget.value);
    const [selectedSortBtn, setSelectedSortBtn] = useState("YearDesc");

    const sortAlphabeticallyAsc = () => {
        const newData = movies.sort((a, b) => {
          const sorted = "AlphabeticallyAsc";
          const makeReverse = sorted === "AlphabeticallyAsc" ? 1 : -1;
          return makeReverse * a.Title.localeCompare(b.Title);
        });
        setMovies(newData);
      };
      const sortAlphabeticallyDesc = () => {
        const sorted = "AlphabeticallyDesc";
        const newData = movies.sort((a, b) => {
          const makeReverse = sorted === "AlphabeticallyDesc" ? -1 : 1;
          return makeReverse * a.Title.localeCompare(b.Title);
        });
        setMovies(newData);
      };
    
      const sortYearAsc = () => {
        const sorted = "YearAsc";
        const newData = movies.sort((a, b) => {
          const makeReverse = sorted === "YearAsc" ? 1 : -1;
          return makeReverse * a.Year.localeCompare(b.Year);
        });
        setMovies(newData);
      };
      const sortYearDesc = () => {
        const newData = movies.sort((a, b) => {
          const sorted = "YearDesc";
          const makeReverse = sorted === "YearDesc" ? -1 : 1;
          return makeReverse * a.Year.localeCompare(b.Year);
        });
        setMovies(newData);
      };


    return (<> <div className="inline-flex rounded-md shadow-sm" role="group">
        <button color="dark">
        <input
          type="checkbox"
          name="react-sort-btn"
          value="AlphabeticallyAsc"
          checked={isSortSelected("AlphabeticallyAsc")}
          onChange={handleSortClick}
          onClick={() => sortAlphabeticallyAsc()}
        />
        AlphabeticallyAsc
        </button>
        <button color="dark">
        <input
          type="checkbox"
          name="react-sort-btn"
          value="AlphabeticallyDesc"
          checked={isSortSelected("AlphabeticallyDesc")}
          onChange={handleSortClick}
          onClick={() => sortAlphabeticallyDesc()}
        />
        AlphabeticallyDesc
        </button>
        <button color="dark">
        <input
          type="checkbox"
          name="react-sort-btn"
          value="YearAsc"
          checked={isSortSelected("YearAsc")}
          onChange={handleSortClick}
          onClick={() => sortYearAsc()}
        />
        YearAsc
        </button>
        <button color="dark">
        <input
          type="checkbox"
          name="react-sort-btn"
          value="YearDesc"
          checked={isSortSelected("YearDesc")}
          onChange={handleSortClick}
          onClick={() => sortYearDesc()}
        />
        YearDesc
        </button>
        </div></>)
}

export default StepThree