import { Component, Input } from '@angular/core';
import { ListaCompartilhadaArquivo } from '../../model/ListaCompartilhadaArquivo';

import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-proposta-acesso',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './proposta-acesso.component.html',
  styleUrl: './proposta-acesso.component.css'
})
export class PropostaAcessoComponent {

  @Input() data: ListaCompartilhadaArquivo[] | undefined;
}
