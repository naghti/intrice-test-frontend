import { useGetFilteredMovies } from "../../hooks/FilterHooks"
import { useAppSelector } from "../../hooks/redux"
import { IMovie } from "../../models/IMovie"
import Movie from "../Movie"

function MoviesBox() {
  const {moviesInfo} = useAppSelector(state => state.moviesReducer)
  const filteredMovies = useGetFilteredMovies()

  return (
    <div 
      className="
        grid 
        justify-center
        auto-cols-[minmax(0,1fr)] 
        md:grid-flow-col
        md:auto-cols-30%
        lg:auto-cols-20%
        gap-8
      "
    >
      {
        filteredMovies.map((movie, i) => (
          <Movie info={movie} key={i}/>
        ))
      }
    </div>
  )
}

export default MoviesBox