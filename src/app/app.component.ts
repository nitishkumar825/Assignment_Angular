import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldCitiesService } from '../services/world-cities.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'World Cities';
  worldCitiesList:any[]=[];

  constructor(private service:WorldCitiesService){}

  ngOnInit(): void {
    
  }

  getWorldCities(){
    this.service.get().subscribe((res:any)=>{
      this.worldCitiesList=res.data;
    })
  }
}
