import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentBoxesComponent } from './tournament-boxes.component';

describe('TournamentBoxesComponent', () => {
  let component: TournamentBoxesComponent;
  let fixture: ComponentFixture<TournamentBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentBoxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
