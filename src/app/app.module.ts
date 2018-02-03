//system list
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { routing, appRoutingProviders  } from './app.routing';

//component list
import { AppComponent } from './app.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesComponent} from './movies/movies.component';
import { MovieComponent} from './movie/movie.component';

//service list
import { CustomFormsModule } from 'ng2-validation'
import { MovieService } from './services/movie.service';

//api list 
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    AutoGrowDirective,
    HeaderComponent,
    FrontPageComponent,
    NotfoundComponent,
    MoviesComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    routing,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAonY3026sfDJpebJhtp-lkYQV8JHaL3MI'
    }),
 ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    appRoutingProviders,
    MovieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
