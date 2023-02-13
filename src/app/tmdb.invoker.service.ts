import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { transform } from 'typescript';
import { displayEntity, listHTTP,movie,TVShow } from './model/tv-show.model';

const API_BASE_TV_URL="https://api.themoviedb.org/3/tv"
const API_BASE_MOVIE_URL="https://api.themoviedb.org/3/movie"
// const URL="https://api.themoviedb.org/3/tv/popular?api_key=35572fd815c38ffbe7933c9223c3b638&language=en-US"
const URL="https://api.themoviedb.org/3/tv/popular?language=en-US"
const IMG_BASE_PATH="https://image.tmdb.org/t/p/original"


@Injectable({
  providedIn: 'root'
})
export class TmdbInvokerService {

  constructor(private http: HttpClient) { }

  type!: "Movie" |"TV"

  fetchPopular(){
    return this.http.get<listHTTP>(URL).pipe(
      map((resp)=>{
        console.log(resp);
        return resp.results.map(data=>{
          return {id: data.id,name: data.original_name,imagePath: this.getImagePath(data)} as displayEntity;
        })

      })
    )
  }

  getImagePath(data: any): string{
    if(data && data.poster_path && data.poster_path!==null){
      return IMG_BASE_PATH+data.poster_path
    }else
      return "assets/NoImage.jpg"

  }

  fetchSimilar(id: number,type:"Movie" |"TV"){
    const url=type==='Movie'?API_BASE_MOVIE_URL:API_BASE_TV_URL
    return this.http.get<listHTTP>(url+`/${id}/similar`).pipe(
      map((resp)=>{
        return resp.results.map(data=> this.transformDisplayEntity(data))
      })
    )
  }

  fetchDetails(id: number,type:"Movie" |"TV"){
    const url=type==='Movie'?API_BASE_MOVIE_URL:API_BASE_TV_URL
    return this.http.get(url+`/${id}`).pipe(
      map((resp: any)=>{
        // console.log(resp);
          if(type==='Movie')
            return this.transformMovie(resp)
          else
          return this.transformTV(resp)
        })
    )

  }

  transformDisplayEntity(data:any): displayEntity{
    return {id: data.id,name: data.original_name,imagePath: this.getImagePath(data)}
  }

  transformMovie(data: any): movie{
    return {id: data.id,name:data.name,imagePath: this.getImagePath(data),//:IMG_BASE_PATH+data.backdrop_path,
      genres:data.genres,rating:data.vote_average,description:data.overview}

  }

  transformTV(data: any): TVShow{

    return {id: data.id,name:data.name,imagePath:this.getImagePath(data),//:IMG_BASE_PATH+data.backdrop_path,
      genres:data.genres,rating:data.vote_average,seasonsCount:data.number_of_seasons,
      totalEpisodes:data.number_of_episodes,description:data.overview}

  }

}
