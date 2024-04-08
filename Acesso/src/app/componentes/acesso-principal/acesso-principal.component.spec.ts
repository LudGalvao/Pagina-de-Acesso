import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoPrincipalComponent } from './acesso-principal.component';

describe('AcessoPrincipalComponent', () => {
  let component: AcessoPrincipalComponent;
  let fixture: ComponentFixture<AcessoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcessoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
