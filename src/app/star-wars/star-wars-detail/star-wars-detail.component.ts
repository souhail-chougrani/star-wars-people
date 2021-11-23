import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StarWarsPeople } from '../../models/start-wars-people';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-star-wars-detail',
  templateUrl: './star-wars-detail.component.html',
  styleUrls: ['./star-wars-detail.component.scss']
})
export class StarWarsDetailComponent {
  details: StarWarsPeople;
  constructor(private ac: ActivatedRoute) {
    const { id } = this.ac.snapshot.params;
    if (id) {
      this.details = this.ac.snapshot.data?.detail as StarWarsPeople;
    }
  }


}
