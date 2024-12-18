import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useFindMovies } from "../../hooks/MoviesHooks";
import { useState } from "react";
import { IMovie } from "../../models/IMovie";
import MatchedMovies from "../MatchedMovies";
import { utilsSlice } from "../../store/reducers/UtilsSlice";
import { useSelector } from "react-redux";

function Search() {
  const {setSearchField} = utilsSlice.actions
  const {searchField} = useAppSelector(state => state.utilsReducer)
  const dispatch = useAppDispatch()

  const inputChange = (value: string) => {
    dispatch(setSearchField(value))    
  }

  return (
    <IconContext.Provider
      value={{ size: '30px' }}
    >
      <div 
        className="
          h-9
          flex
          align-center 
          max-w-sm 
          w-full 
          relative
          mx-2
      ">
        <input 
          placeholder="Поиск"
          type="text" 
          value={searchField}
          onChange={(e) => inputChange(e.target.value)}
          className="
            border 
            border-zinc-600/80 
            rounded-l 
            px-2
            p-1 
            text-sm
            hover:border-2
            focus:border-violet-800
            focus:border-2
            placeholder-zinc-600
            w-full
            z-10
          "
        />
        <button 
          className="
            bg-gray-200/80
            p-0.5
            rounded-r
            z-10
          "
        >
          <CiSearch/>
        </button>
        <MatchedMovies/>
      </div>
    </IconContext.Provider>
  )
}

export default Search