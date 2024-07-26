import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prueba3Page } from './prueba3.page';

describe('Prueba3Page', () => {
  let component: Prueba3Page;
  let fixture: ComponentFixture<Prueba3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
