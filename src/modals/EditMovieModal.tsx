import clsx from "clsx"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { modalsSlice } from "../store/reducers/ModalsSlice"
import TextInput from "../components/Inputs/TextInput"
import TextLabel from "../components/Labels/TextLabel"
import { SubmitHandler, useForm } from "react-hook-form"
import { IMovie } from "../models/IMovie"
import { useMovieAdd, useMovieEdit } from "../hooks/MoviesHooks"
import { zodResolver } from '@hookform/resolvers/zod'
import toast, {Toaster} from "react-hot-toast"
import { z } from "zod"
import { useEffect } from "react"
import { movieSchema } from "../utils/movieFromSchema"

function EditMovieModal() {
  const {editMovieInfo} = useAppSelector(state => state.moviesReducer)
  const {editModalVisibleSet} = modalsSlice.actions
  const dispatch = useAppDispatch()
  const editMovieFunction = useMovieEdit()

  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<IMovie>({
    resolver: zodResolver(movieSchema),
    defaultValues: editMovieInfo!
  });

  function closeModal () {
    dispatch(editModalVisibleSet(false))
  }
  
  const editMovie: SubmitHandler<IMovie> = async (data) => {
    const { id } = editMovieInfo!
    await editMovieFunction({...data, id})
    closeModal()
    reset()
  }

  const watchedValues = watch();
  const alertErors = () => {
    const oneField = Object.values(errors)[0]
    const message = oneField?.message || "Ошибка при заполнении формы"

    toast.error(message)
  }
  
  return (
    <>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <div
      className={clsx(`
        fixed
        w-full
        h-full
        bg-gray-950/50
        z-20
        flex
        items-center
        justify-center
      `)}
      onClick={closeModal}
    >
      <div
        className="
          w-4/5
          max-w-[1200px]
          bg-white
          rounded-lg
          p-5
        "
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit(editMovie, alertErors)}>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <TextLabel text="Название"/>
              <TextInput 
                placeholder="Название" 
                register={register} 
                name="title" 
              />
            </div>
            <div>
              <TextLabel text="Жанр"/>
              <TextInput 
                placeholder="Жанр" 
                register={register} 
                name="genre" 
              />
            </div>
            <div>
              <TextLabel text="Год выпуска"/>
              <TextInput 
                placeholder="Год выпуска" 
                register={register} 
                name="release_year" 
              />
            </div>  
            <div>
              <TextLabel text="Режисер"/>
              <TextInput 
                placeholder="Режисер" 
                register={register} 
                name="director" 
              />
            </div>
          </div>

          <div className="mb-6">
              <TextLabel text="Актеры"/>
              <TextInput 
                placeholder="Актеры" 
                register={register} 
                name="actors"  
            />
          </div> 
          <div className="mb-6">
              <TextLabel text="Анотация"/>
              <TextInput 
                placeholder="Анотация" 
                register={register} 
                name="annotation" 
            />
          </div> 
          <button 
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
              Редактировать
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default EditMovieModal