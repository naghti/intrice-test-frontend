import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import AddMovie from "./components/Buttons/AddMovie"
import MoviesBox from './components/Containers/MoviesBox'
import Controls from './components/Controls'
import WidthBox from './components/Containers/WidthBox'
import ModalsWrapper from './components/ModalsWrapper'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { modalsSlice } from './store/reducers/ModalsSlice'
import { useMoviesList } from './hooks/MoviesHooks'
import { useEffect } from 'react'

function App() {
  const updateMoviesListFunction = useMoviesList()
  useEffect(() => {
    updateMoviesListFunction()
  }, [])
  return (
    <>
      <ModalsWrapper/>
      <div className='flex flex-col min-h-screen'>
        <Header/>
        <div className='grow bg-bodyBackground px-6 py-8 flex just'>
          <WidthBox
            className={"flex flex-col"}
          >
            <Controls/>
            <MoviesBox/>
          </WidthBox>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
