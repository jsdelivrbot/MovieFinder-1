import { Router,Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { FrontPageComponent } from './front-page/front-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesComponent} from './movies/movies.component';
import { MovieComponent} from './movie/movie.component';

//this part is for routes
const appRoutes: Routes = [
   { path: '', component: FrontPageComponent},
   { path: 'map', component: MoviesComponent},
   { path:'movie/:id', component: MovieComponent},
   { path: '**', component:NotfoundComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


  