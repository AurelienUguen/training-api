import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {

  vehicles: any;

  constructor(private http: HttpClient) {
    this.http.get('https://swapi.dev/api/vehicles/').subscribe(data => {
      this.vehicles = data;
    })
  }

}
