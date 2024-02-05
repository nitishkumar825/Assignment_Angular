import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { WorldCitiesService } from '../../services/world-cities.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-world-cities',
  standalone: true,
  imports: [CommonModule,AppComponent],
  templateUrl: './world-cities.component.html',
  styleUrl: './world-cities.component.css'
})
export class WorldCitiesComponent implements OnInit{

  title = 'World Cities';
  // worldCitiesList:any[]=[];
  worldCities$:Observable<any>;
  constructor(private service:WorldCitiesService){
    this.worldCities$=this.service.get();
  }
  ngOnInit(): void {
  
  }

  // getWorldCities(){
  //   this.service.get().subscribe((res:any)=>{
  //     this.worldCitiesList=res.data;
  //   })
  // }
}
