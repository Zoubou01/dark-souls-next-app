'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Details from "./details";


const ShowDetails = () => {

    const params = useSearchParams();
    const id = params.get('id');

    const [details, setDetails] = useState<undefined | Details>(undefined);

    const getDetailsRequest = async () => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=4fb6c6fc`;
    
        const responseDetailed = await fetch(url);
        const responseDetailedJson = await responseDetailed.json();
    
        if (responseDetailedJson) {
            setDetails(responseDetailedJson);
        }
      };
    
      useEffect(() => {
        if (id) {
          getDetailsRequest();
        }
      }, []);
    
    return ( 
    <div className="container xl">
        <div className="mt-5 grid grid-col-2 grid-flow-col gap-4 text-white">
        <div><img src={details?.Poster} alt="movie"></img></div>
        <div className="">
        <h1>{details?.Title}</h1>
        <h2>{details?.Year}</h2>
        <h3>{details?.Rated}</h3>
        <h4>{details?.Released}</h4>
        <h4>{details?.Runtime}</h4>
        <h4>{details?.Genre}</h4>
        <h4>{details?.Director}</h4>
        <h4>{details?.Writer}</h4>
        <h4>{details?.Actors}</h4>
        <h4>{details?.Plot}</h4>
        <h4>{details?.Language}</h4>
        <h4>{details?.Country}</h4>
        <h4>{details?.Awards}</h4>
        <h4>{details?.Metascore}</h4>
        <h4>{details?.imdbRating}</h4>
        <h4>{details?.imdbVotes}</h4>
        <h4>{details?.BoxOffice}</h4>
        </div>
            </div>``
    </div>
    )
}

export default ShowDetails