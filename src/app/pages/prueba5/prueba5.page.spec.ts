import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prueba5Page } from './prueba5.page';

describe('Prueba5Page', () => {
  let component: Prueba5Page;
  let fixture: ComponentFixture<Prueba5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
