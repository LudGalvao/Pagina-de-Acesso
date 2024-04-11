import { TestBed } from '@angular/core/testing';

import { ListaCompartilhadaArquivoService } from './lista-compartilhada-arquivo.service';

describe('ListaCompartilhadaArquivoService', () => {
  let service: ListaCompartilhadaArquivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCompartilhadaArquivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
