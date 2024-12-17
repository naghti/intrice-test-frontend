import axios from "axios";
import { IMovie } from "../models/IMovie";

const serverUrl = "http://localhost:5000/api/movie"

export const getMoviesAPI = async (): Promise<IMovie[]> => {
  try {
    const response = await axios.get(serverUrl)
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const addMovieAPI = async (info: IMovie) => {
  try {
    const response = await axios.post(serverUrl, {
      ...info
    })
    return response
  } catch (e) {
    console.log(e)
  }
}

export const deleteMovieAPI = async (id: string) => {
  try {
    const response = await axios.delete(serverUrl, {
      params: {id: id}
    })
    return response
  } catch (e) {
    console.log(e)
  }
}

export const editMovieAPI = async (info: IMovie) => {
  try {
    const response = await axios.patch(serverUrl, {
      ...info
    })
    return response
  } catch (e) {
    console.log(e)
  }
}