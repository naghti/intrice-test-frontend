import clsx from 'clsx'
import React from 'react'
import TextLabel from '../components/Labels/TextLabel'
import TextHeader from '../components/Headers/TextHeader'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { modalsSlice } from '../store/reducers/ModalsSlice'
import DeleteMovie from '../components/Buttons/DeleteMovie'
import EditMovie from '../components/Buttons/EditMovie'

function InfoMovieModal() {
  const {infoModalVisible} = useAppSelector(state => state.modalReducer)
  const {activeMovieInfo} = useAppSelector(state => state.moviesReducer)
  const {infoModalVisibleSet} = modalsSlice.actions
  const dispatch = useAppDispatch()

  function closeModal () {
    dispatch(infoModalVisibleSet(false))
  }

  if (!activeMovieInfo) return;
  return (
    <div
      className={clsx(`
        fixed
        w-full
        h-full
        bg-gray-950/50
        z-20
        flex
        flex-col
        items-center
        justify-center
        transition-opacity 
        duration-300 
        ease-in-out`
      )}
      onClick={closeModal}
    >
      <div
        className="
          w-4/5 
          max-w-[1200px]
          md:w-2/3 
          lg:w-1/2
          bg-white
          rounded-lg
          shadow-lg
          flex
          relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="
            w-2/5
            min-w-40
            bg-gradient-to-b from-red-500 to-orange-500
            rounded-l-lg
            flex items-center justify-center
          "
        >
        </div>

        <div className="grow pt-4 pl-6 pr-6 flex flex-col">
          <div className='flex items-center flex-col'>
            <div className='flex items-center space-x-2'>
              <TextHeader text={activeMovieInfo.title} />
              <TextHeader text={`(${activeMovieInfo.release_year})`} />
            </div>
            <hr className="w-full my-2 border-gray-300" />
          </div>

          <div className='mt-5 h-full flex flex-col justify-between'>
            <TextLabel text={`Актеры: ${activeMovieInfo.actors}`} extraStylish='!text-base' />
            <TextLabel text={`Режиссер: ${activeMovieInfo.director}`} extraStylish='!text-base' />
            <TextLabel text={`Жанр: ${activeMovieInfo.genre}`} extraStylish='!text-base' />
            <TextLabel text={`Аннотация: ${activeMovieInfo.annotation || "Отсутствует"}`} extraStylish='!text-base' />
          </div>
  
          <div className="w-full flex justify-end mt-4">
            <EditMovie/>
            <DeleteMovie id={activeMovieInfo.id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoMovieModal