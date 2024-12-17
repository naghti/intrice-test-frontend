import React from 'react'
import { deleteMovieAPI } from '../../API/MovieService'
import { useMovieDelete } from '../../hooks/MoviesHooks'

function DeleteMovie({id}: {id: string}) {
  const deleteFunction = useMovieDelete()

  async function deleteMovie () {
    deleteFunction(id)
  }

  return (
    <button 
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
      onClick={deleteMovie}
    >
      Delete
    </button>
  )
}

export default DeleteMovie