import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsList, StarWarsPeople } from '../../models/start-wars-people';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class StarWarsService {
    path = environment.url;
    constructor(private http: HttpClient) { }

    getstarWars(page?: number, search?: string): Observable<StarWarsList> {
        return this.http.get<StarWarsList>(`${this.path}/people?${page ? 'page=' + page : ''} ${search ? '&search=' + search : ''}`);
    }

    getStarWarDetail(id: string): Observable<StarWarsPeople> {
        return this.http.get<StarWarsPeople>(`${this.path}/people/${id}`);
    }
}
