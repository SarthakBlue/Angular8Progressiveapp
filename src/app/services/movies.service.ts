import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl: string = "http://www.omdbapi.com/?apikey=11a74ac3";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  

  constructor(private httpClient: HttpClient) { }

  searchMovies(searchTerm: string):Observable<any>{
      return this.httpClient.get(baseUrl,{params:{s: searchTerm}});
  }
  getMovieDetails(imdbID: string):Observable<any>{
    return this.httpClient.get(baseUrl,{params:{i: imdbID}});
  }

}
