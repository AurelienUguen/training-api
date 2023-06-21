import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent {

  species: any;

  constructor(private http: HttpClient) {
    this.http.get('https://swapi.dev/api/species/').subscribe(data => {
      this.species = data;
    })
  }

}
