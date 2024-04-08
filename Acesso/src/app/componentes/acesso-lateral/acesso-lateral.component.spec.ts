import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoLateralComponent } from './acesso-lateral.component';

describe('AcessoLateralComponent', () => {
  let component: AcessoLateralComponent;
  let fixture: ComponentFixture<AcessoLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoLateralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcessoLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
