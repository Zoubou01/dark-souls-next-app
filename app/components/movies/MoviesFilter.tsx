'use client'
import React, { useState } from "react";
import MovieList from "./MoviesList";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useSelector } from "react-redux";

const MoviesFilter = () => {
    const isSelected = (value: string): boolean => selectedRadioBtn === value;
    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);

  const [selectedRadioBtn, setSelectedRadioBtn] = useState("movie");

  // Sort buttons
  const isSortSelected = (value: string): boolean => selectedSortBtn === value;
  const handleSortClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedSortBtn(e.currentTarget.value);
  const [selectedSortBtn, setSelectedSortBtn] = useState("YearDesc");

  // Search Bar
  const [searchValue, setSearchValue] = useState("Lord of the Rings");
  // Request MovieList
  const [movies, setMovies] = useState([] as any[]);

  //show next step
  const stepOne = useSelector((state:any)=>state.bonfire.stepone)
  const stepTwo = useSelector((state:any)=>state.bonfire.steptwo)

  

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

  return (
    
    <div className="Btns mt-10 mb-5 flex flex-col items-center">
      {stepOne && <StepOne/>}
      {stepTwo && <StepTwo/>}
      {/* {step == 2 && <StepTwo/>}
      {step == 3 && <StepThree/>} */}

      
    
    </div>
  );
}

export default MoviesFilter