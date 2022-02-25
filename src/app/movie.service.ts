import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movie:Movie;
  constructor() { }
  moviesList = [
    {title: 'Scarface', year: '1980', director: 'Jim Mark'},
    {title: 'Dawn of The Dead', year: '1990', director: 'Mike Samson'},
    {title: 'Cars', year: '2000', director: 'John Smith'},
    {title: 'Fast and Furious', year: '2000', director: 'Mary Alen'},
    {title: 'Taxi Driver', year: '1990', director: 'Kate Jonnes'}
  ];
  
  getMovies() {
    return this.moviesList;
  }
  
  addMovie(movietitle:string, moviedirector:string, movieyear:string){
    this.moviesList.push(new Movie(movietitle, movieyear, moviedirector));
  }
}
