import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prueba1Page } from './prueba1.page';

describe('Prueba1Page', () => {
  let component: Prueba1Page;
  let fixture: ComponentFixture<Prueba1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
