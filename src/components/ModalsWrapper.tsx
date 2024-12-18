import { useAppSelector } from "../hooks/redux"
import AddMovieModal from "../modals/AddMovieModal"
import EditMovieModal from "../modals/EditMovieModal"
import InfoMovieModal from "../modals/InfoMovieModal"

function ModalsWrapper() {
  const {
    editModalVisible, 
    addModalVisible, 
    infoModalVisible
  } = useAppSelector(state => state.modalReducer)
  return (
    <>
      {addModalVisible && <AddMovieModal/>}
      {infoModalVisible && <InfoMovieModal/>}
      {editModalVisible && <EditMovieModal/>}
    </>
  )
}

export default ModalsWrapper