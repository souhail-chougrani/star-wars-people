import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { ReplaySubject, merge, Observable } from 'rxjs';
import { StarWarsList } from '../../models/start-wars-people';
import { StarWarsService } from '../services/star-wars.service';
import { debounceTime, distinctUntilChanged, finalize, map, scan, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  @ViewChild(NgbPagination, { static: true }) pagination: NgbPagination;

  startwarsList$: Observable<StarWarsList>;
  searchForm: FormControl = new FormControl();
  count: number;
  loading$ = new ReplaySubject<boolean>(1);

  constructor(private starWarsService: StarWarsService) { }


  ngOnInit(): void {
    const search$ = this.searchForm.valueChanges.pipe(
      tap(() => this.loading$.next(true)),
      map(e => ({ search: e })),
      distinctUntilChanged(),
      debounceTime(3000)
    );
    const page$ = this.pagination.pageChange.pipe(map(e => ({ page: e })));

    this.startwarsList$ = merge(page$, search$).pipe(
      startWith({ search: null, page: 1 }),
      scan((acc, curr: any) => {

        return acc = { ...acc, ...curr };
      }),
      switchMap(({ page, search }) => this.starWarsService.getstarWars(page, search).pipe(
        tap(({ count }) => {
          this.count = count;
          this.loading$.next(false);
        }),
      )),
    );

  }

}
