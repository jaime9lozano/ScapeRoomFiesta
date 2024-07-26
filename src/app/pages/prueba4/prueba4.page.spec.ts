import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prueba4Page } from './prueba4.page';

describe('Prueba4Page', () => {
  let component: Prueba4Page;
  let fixture: ComponentFixture<Prueba4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
