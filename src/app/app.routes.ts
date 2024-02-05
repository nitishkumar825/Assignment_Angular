import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorldCitiesComponent } from './world-cities/world-cities.component';


export const routes: Routes = [
    {
        path:'',component:AppComponent
    },
    {
        path:'worldCities',component:WorldCitiesComponent
    }
];
