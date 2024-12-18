import { useCallback, useEffect } from "react";
import { addMovieAPI, deleteMovieAPI, editMovieAPI, getMoviesAPI } from "../API/MovieService"
import { IMovie } from "../models/IMovie"
import { moviesSlice } from "../store/reducers/MoviesSlice"
import { useAppDispatch, useAppSelector } from "./redux"
import { modalsSlice } from "../store/reducers/ModalsSlice";

export const useMoviesList = () => {
  const dispatch = useAppDispatch();

  const updateMovesList = useCallback(async () => {
    const listOfMovies: Array<IMovie> = await getMoviesAPI();
    dispatch(moviesSlice.actions.setMovies(listOfMovies));
  }, [])

  return updateMovesList
};

export const useMovieDelete = () => {
  const {infoModalVisibleSet} = modalsSlice.actions
  const dispatch = useAppDispatch()
  const updateMoviesListFunction = useMoviesList()

  const deleteMovie = useCallback(async (id: string) => {
    try {
      await deleteMovieAPI(id); 
      dispatch(infoModalVisibleSet(false)); 
      updateMoviesListFunction()
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  }, [dispatch]);

  return deleteMovie;
}

export const useMovieAdd = () => {
  const updateMoviesListFunction = useMoviesList()

  const addMovie = useCallback(async (data: IMovie) => {
    const response = await addMovieAPI(data)
    updateMoviesListFunction()
  },[])

  return addMovie
}

export const useFindMovies = () => {
  const {moviesInfo} = useAppSelector(state => state.moviesReducer)

  const findMovies = useCallback((title: string) => {
    if (title == "" || title.length < 3) return [] 
    const matchingMovies = []

    for (const movie of moviesInfo) {
      const movieFildsLowerCase = [
        movie.title.toLowerCase(),
        movie.genre.toLowerCase(),
        movie.director.toLowerCase(),
        movie.annotation.toLowerCase(),
      ]
      const lowerInputTitle = title.toLowerCase()
      const check = movieFildsLowerCase.some(item => item.includes(lowerInputTitle))
      
      if (check) matchingMovies.push(movie)
    } 

    return matchingMovies
  }, [moviesInfo])

  return findMovies
}

export const useMovieEdit = () => {
  const updateMoviesListFunction = useMoviesList()

  const editMovieInfo = useCallback(async (data: IMovie) => {
    const response = await editMovieAPI(data)
    updateMoviesListFunction()
  },[])

  return editMovieInfo
}