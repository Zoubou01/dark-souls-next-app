import { Movie } from "./movie";

interface PropTypes {
  movies: Movie[];
}

const MovieList: React.FC<PropTypes> = ({ movies }) => {
  return (
    <>
    <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 gap-4 " >
      {movies?.slice(0,8).map((movie, index) => (
      <div className="bg-white rounded-lg shadow dark:bg-gray-800" >
          <a href={'/details?id='+ movie.imdbID}>
              <img className=" rounded-t-lg" alt={movie.Title} src={movie.Poster} />
          </a>
          <div className="px-5 pb-5">
              <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{movie.Title}</h5>
              </a>
              
          </div>
      </div>

      ))}
      </div>
    </>
  );
};

export default MovieList;