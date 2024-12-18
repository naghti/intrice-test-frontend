import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { useGetFilterFieldsMovies } from "../hooks/FilterHooks"
import { IFilters } from "../models/IFilters"
import { IMovie } from "../models/IMovie"
import { utilsSlice } from "../store/reducers/UtilsSlice"

function Select({
  name,
  filterField
}: {
  name: string,
  filterField: keyof IFilters
}) {
  const dispatch = useAppDispatch()
  const {setFilter} = utilsSlice.actions
  const filterFunction = useGetFilterFieldsMovies()
  const filterArray = filterFunction(filterField)

  const selectFilter = (value: string) => {
    if (value === "null") 
      dispatch(setFilter([filterField, null]))
    else
      dispatch(setFilter([filterField, value]))
  }
  
  return (
    <select 
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => selectFilter(e.target.value)}
    >
      <option
        value={"null"}
      >
        {name}
      </option>
      {
        filterArray.map((item, index) => (
          <option 
            value={item} 
            key={index}
          >
            {item}
          </option>
        ))
      }
    </select>
  )
}

export default Select