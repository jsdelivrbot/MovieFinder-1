import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
    apikey: string;
    
    constructor(private _jsonp:Jsonp){
        this.apikey = '5d9ceab5a96553eea2e35962e0f2b9c2';
        console.log('MovieService Initialized...');
    }
    
    getPopular(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
            .map(res => res.json());
    }
    
    getInTheaters(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-10-19&primary_release_date.lte=2017-11-19&api_key='+this.apikey)
            .map(res => res.json());
    }
     
    getDrama(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&with_genres=18&sort_by=vote_average.desc&vote_count.gte=8&api_key='+this.apikey)
            .map(res => res.json());
    }
    
    getKids(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key='+this.apikey)
            .map(res => res.json());
    }
    
    searchMovies(searchStr:string){
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
            .map(res => res.json());
    }
    
    getMovie(id:string){
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
            .map(res => res.json());
    }
}