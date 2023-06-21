import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {

  starships: any;

  constructor(private http: HttpClient) {
    this.http.get('https://swapi.dev/api/starships/').subscribe(data => {
      this.starships = data;
    })
  }
}
