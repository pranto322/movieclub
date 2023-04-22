import { Route,Routes } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import MovieList from "../pages/MovieList";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element ={<MovieList apiPath = "movie/now_playing" title="home"/> } />
        <Route path="movie/:id" element = {<MovieDetails/>}/>
        <Route path="movies/popular" element ={<MovieList apiPath = "movie/popular" title = "popular"/>}/>
        <Route path="movies/top" element ={<MovieList apiPath = "movie/top_rated" title = "top rated"/>}/>
        <Route path="movies/upcoming" element ={<MovieList apiPath = "movie/upcoming" title = "upcoming"/>}/>
        <Route path="search" element ={<Search apiPath = "/search/movie"/>}/>
        <Route path="*" element ={<PageNotFound/>}/>
    </Routes>
  )
}

export default AllRoutes



