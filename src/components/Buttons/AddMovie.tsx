import { IconContext } from "react-icons";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { modalsSlice } from "../../store/reducers/ModalsSlice";
import { useMovieAdd } from "../../hooks/MoviesHooks";

function AddMovie() {
  const {addModalVisible} = useAppSelector(state => state.modalReducer)
  const {addModalVisibleSet} = modalsSlice.actions
  const dispatch = useAppDispatch()

  function click() {
    dispatch(addModalVisibleSet(!addModalVisible))
  }

  return (
    <IconContext.Provider value={{size: "25px"}}>
      <button 
        className="
          flex
          items-center
          bg-green-400
          py-2
          px-3
          rounded-md
          text-white 
          font-bold
          hover:bg-green-500
        "
        onClick={click}
      >
        <span className="mr-2">
          Add Movie
        </span>
        <IoIosAddCircleOutline/>
      </button>
    </IconContext.Provider>
  )
}

export default AddMovie