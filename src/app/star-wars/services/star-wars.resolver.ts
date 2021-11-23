import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { StarWarsPeople } from '../../models/start-wars-people';
import { StarWarsService } from './star-wars.service';

@Injectable({ providedIn: 'root' })
export class StarWarsResolver implements Resolve<StarWarsPeople> {
    constructor(private starWarsService: StarWarsService) {

    }
    resolve(route: ActivatedRouteSnapshot): Observable<StarWarsPeople> | Promise<StarWarsPeople> | StarWarsPeople {
        const { id } = route.params;
        return id ? this.starWarsService.getStarWarDetail(id) : EMPTY;
    }
}
