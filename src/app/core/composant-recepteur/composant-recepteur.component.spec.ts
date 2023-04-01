import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantRecepteurComponent } from './composant-recepteur.component';

describe('ComposantRecepteurComponent', () => {
  let component: ComposantRecepteurComponent;
  let fixture: ComponentFixture<ComposantRecepteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantRecepteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantRecepteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
