import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent {
    popularList:Array<Object>;
    theatersList:Array<Object>;
    kidsList:Array<Object>;
    dramaList:Array<Object>;
    searchStr: string;
    searchRes:Array<Object>;
    
    constructor(private _movieService: MovieService){
        this._movieService.getPopular().subscribe(res=> {
           // console.log(res.results);
           this.popularList = res.results; 
        });
        
        this._movieService.getInTheaters().subscribe(res=> {
                // console.log(res.results);
           this.theatersList = res.results; 
        });
        
        this._movieService.getKids().subscribe(res=> {
                // console.log(res.results);
           this.kidsList = res.results; 
        });
        
        this._movieService.getDrama().subscribe(res=> {
                // console.log(res.results);
           this.dramaList = res.results; 
        });
        
    }
    
    searchMovies(){
        this._movieService.searchMovies(this.searchStr).subscribe(res => {
            this.searchRes = res.results;
     });
    }
    
}
