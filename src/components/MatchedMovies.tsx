import { useFindMovies } from '../hooks/MoviesHooks';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IMovie } from '../models/IMovie'
import { modalsSlice } from '../store/reducers/ModalsSlice';
import { moviesSlice } from '../store/reducers/MoviesSlice';
import { utilsSlice } from '../store/reducers/UtilsSlice';

function MatchedMovies() {
  const {searchField} = useAppSelector(state => state.utilsReducer)
  const {infoModalVisibleSet} = modalsSlice.actions
  const {setActiveMovie} = moviesSlice.actions
  const {setSearchField} = utilsSlice.actions
  const dispatch = useAppDispatch()

  const findMoviesFunction = useFindMovies()
  const matchesMovies = findMoviesFunction(searchField)

  function pickMovie(info: IMovie) {
    dispatch(setActiveMovie(info))
    dispatch(infoModalVisibleSet(true))
    dispatch(setSearchField(""))
  }

  if (!matchesMovies.length) return;
  return (
    <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded shadow-lg ">
        <div className="h-8"></div>
        {matchesMovies.map((item, index) => (
            <li 
                key={index} 
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => pickMovie(item)}
            >
                {item.title}
            </li>
        ))}
    </ul>
  )
}

export default MatchedMovies