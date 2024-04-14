import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaAcessoComponent } from './proposta-acesso.component';

describe('PropostaAcessoComponent', () => {
  let component: PropostaAcessoComponent;
  let fixture: ComponentFixture<PropostaAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropostaAcessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropostaAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
