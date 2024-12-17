import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { IMovie } from "../models/IMovie"
import { modalsSlice } from "../store/reducers/ModalsSlice"
import { moviesSlice } from "../store/reducers/MoviesSlice"

function Movie({info}: {info: IMovie}) {
  const {infoModalVisibleSet} = modalsSlice.actions
  const {setActiveMovie} = moviesSlice.actions
  const dispatch = useAppDispatch()

  function openInfo () {
    dispatch(setActiveMovie(info))
    dispatch(infoModalVisibleSet(true))
  }

  return (
    <div 
      className="
        flex 
        flex-col 
        shadow-lg 
        shadow-zinc-500/40 
        rounded-lg
      "
      onClick={openInfo}
    >
      <div 
        className="
          bg-gradient-to-r 
          from-blue-500 
          to-purple-600
          h-80
          rounded-t-lg
        "
      />
      
      <span
        className="
          font-bold
          text-lg
          p-2
          pl-4
          bg-opacity-80
          rounded-b-lg
        "
      >
        {info.title}
      </span>
    </div>
  )
}

export default Movie