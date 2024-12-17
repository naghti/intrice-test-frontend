import React from 'react'
import { deleteMovieAPI } from '../../API/MovieService'
import { useMovieDelete } from '../../hooks/MoviesHooks'
import { modalsSlice } from '../../store/reducers/ModalsSlice'
import { moviesSlice } from '../../store/reducers/MoviesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IMovie } from '../../models/IMovie'

function EditMovie() {
  const {editModalVisibleSet, infoModalVisibleSet} = modalsSlice.actions
  const {setEditMovie} = moviesSlice.actions
  const {activeMovieInfo} = useAppSelector(state => state.moviesReducer)
  const dispatch = useAppDispatch()

  function editMovieInfo () {
    dispatch(setEditMovie(activeMovieInfo!))
    dispatch(infoModalVisibleSet(false))
    dispatch(editModalVisibleSet(true))
  }

  return (
    <button 
      className="focus:outline-none text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
      onClick={editMovieInfo}
    >
      Edit
    </button>
  )
}

export default EditMovie