import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsFilterComponent } from './star-wars-filter.component';

describe('StarWarsFilterComponent', () => {
  let component: StarWarsFilterComponent;
  let fixture: ComponentFixture<StarWarsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarWarsFilterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
