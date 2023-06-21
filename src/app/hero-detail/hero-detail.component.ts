import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../heroes/hero';

import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {

  hero: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }
}
