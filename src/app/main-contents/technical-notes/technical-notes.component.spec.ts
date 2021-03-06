import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalNotesComponent } from './technical-notes.component';

describe('TechnicalNotesComponent', () => {
  let component: TechnicalNotesComponent;
  let fixture: ComponentFixture<TechnicalNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
