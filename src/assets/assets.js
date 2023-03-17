import { useContext } from "react";
import { APIKEY } from "../context/Index";

// const api_key = useContext(APIKEY)

// Not Founds ---------------------------------------->
export const unavailableLandscape = "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

export const noPicture = "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";

export const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";


// Page APIs -------------------->
// export const Trend_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${page}`

// export const Movie_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`

// export const Series_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`

// export const Search_URL = `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${api_key}&language=en-US&query=${searchText}&page=${page}&include_adult=false`

// export const Single_Movie_URL = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${api_key}&language=en-US`

// export const Video_URL = `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${api_key}&language=en-US`

// export const Actors_URL = `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${api_key}&language=en-US`