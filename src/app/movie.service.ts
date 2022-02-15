import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  
  addMovie(movietitle:string, moviedirector:string, movieyear:string){
    this.moviesList.push({title:movietitle, director:moviedirector, year:movieyear});
  }

  moviesList = [
    { id: 1, title: 'Scarface', year: '1980', director: 'Jim Mark'},
    { id: 2, title: 'Dawn of The Dead', year: '1990', director: 'Mike Samson'},
    { id: 3, title: 'Cars', year: '2000', director: 'John Smith'},
    { id: 4, title: 'Fast and Furious', year: '2000', director: 'Mary Alen'},
    { id: 5, title: 'Taxi Driver', year: '1990', director: 'Kate Jonnes'}
  ];
  
  getMovies() {
    return this.moviesList;
  }
}
