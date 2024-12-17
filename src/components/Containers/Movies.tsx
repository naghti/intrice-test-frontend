import { useAppSelector } from "../../hooks/redux"
import Movie from "../Movie"

function Movies() {
  const {moviesInfo} = useAppSelector(state => state.moviesReducer)
  

  return (
    <div 
      className="
        grid 
        grid-cols-1 
        sm:grid-cols-3
        lg:grid-cols-5
        gap-8
      "
    >
      {
        moviesInfo.map((movie, i) => (
          <Movie info={movie} key={i}/>
        ))
      }
    </div>
  )
}

export default Movies