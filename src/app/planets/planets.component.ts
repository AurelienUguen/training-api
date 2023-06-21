import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {

  planets: any;

  constructor(private http: HttpClient) {
    this.http.get('https://swapi.dev/api/planets/').subscribe(data => {
      this.planets = data;
    })
  }

}
