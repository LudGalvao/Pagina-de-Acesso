import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaArquivosComponent } from './proposta-arquivos.component';

describe('PropostaArquivosComponent', () => {
  let component: PropostaArquivosComponent;
  let fixture: ComponentFixture<PropostaArquivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropostaArquivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropostaArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
