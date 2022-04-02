import axios from "axios";
export const baseImageURL = "https://image.tmdb.org/t/p/original"
const API = axios.create({ baseURL: "https://ghibliapi.herokuapp.com" }); 
export const getAllFilms = () => API.get(`/films`)
export const getFilm = (id) => API.get(`/films/${id}`);
