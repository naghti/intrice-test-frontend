import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { moviesSlice } from '../../store/reducers/MoviesSlice'
import Select from '../Select'

function SelectBox() {
  return (
    <div className='
      grid 
      grid-cols-2 
      gap-4
      lg:grid-cols-4
    '>
      <Select
        name="По Жанру"
        filterField={"genre"}
      />
      <Select
        name="По Году выпуска"
        filterField={"release_year"}
      />
      <Select
        name="По Дате Добавления"
        filterField={"createdAt"}
      />
      <Select
        name="По Дате обновления"
        filterField={"updatedAt"}
      />
    </div>
  )
}

export default SelectBox