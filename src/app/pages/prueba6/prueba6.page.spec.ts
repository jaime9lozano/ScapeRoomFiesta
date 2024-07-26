import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prueba6Page } from './prueba6.page';

describe('Prueba6Page', () => {
  let component: Prueba6Page;
  let fixture: ComponentFixture<Prueba6Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
