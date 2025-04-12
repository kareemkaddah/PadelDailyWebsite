import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerTabComponent } from './lower-tab.component';

describe('LowerTabComponent', () => {
  let component: LowerTabComponent;
  let fixture: ComponentFixture<LowerTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
