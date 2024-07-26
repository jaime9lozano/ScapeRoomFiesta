import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prueba7Page } from './prueba7.page';

describe('Prueba7Page', () => {
  let component: Prueba7Page;
  let fixture: ComponentFixture<Prueba7Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
