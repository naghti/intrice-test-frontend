import { useCallback } from "react"
import { IMovie } from "../models/IMovie"
import { useAppSelector } from "./redux"
import { IFilters } from "../models/IFilters"

const trimData = (data: string) => data.substring(0, 10)

export const useGetFilterFieldsMovies = () => {
  const {moviesInfo} = useAppSelector(state => state.moviesReducer)
  const filterSet: Set<string> = new Set()
  let filterArray: Array<string> = []

  const filterFunction = useCallback((filterField: keyof IFilters) => {
    for (const movie of moviesInfo) {
      if (filterField == "createdAt" || filterField == "updatedAt") 
        filterSet.add(trimData(movie[filterField]))
      else if (typeof filterField == "number")
        filterSet.add(movie[filterField])
      else
        filterSet.add(String(movie[filterField!]))
    }
    filterArray = Array.from(filterSet)
    return filterArray
  },[])

  return filterFunction
}

export const useGetFilteredMovies = () => {
  const {moviesInfo} = useAppSelector(state => state.moviesReducer)
  const {filters} = useAppSelector(state => state.utilsReducer)

  const filterFunction = (movie: IMovie) => {
    for (const filter in filters) {
      const key = filter as keyof IMovie;
      const key2 = filter as keyof IFilters;

      if (filters[key2] == null) continue;

      if (filter === "createdAt" || filter === "updatedAt") {
        const newData = trimData(movie[filter]);
        if (newData !== filters[filter]) return false;
        continue;
      }

      if (key2 == "release_year") {
        if (movie[key].toString() !== filters[key2]) return false
        continue
      }

      if (movie[key] !== filters[key2]) return false; 
    }

    return true;
  };
  
  const filteredMovies = moviesInfo.filter(filterFunction)
  console.log(filters)
  return filteredMovies
}