import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCitiesComponent } from './world-cities.component';

describe('WorldCitiesComponent', () => {
  let component: WorldCitiesComponent;
  let fixture: ComponentFixture<WorldCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldCitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
