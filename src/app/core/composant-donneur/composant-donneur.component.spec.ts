import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantDonneurComponent } from './composant-donneur.component';

describe('ComposantDonneurComponent', () => {
  let component: ComposantDonneurComponent;
  let fixture: ComponentFixture<ComposantDonneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantDonneurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantDonneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
