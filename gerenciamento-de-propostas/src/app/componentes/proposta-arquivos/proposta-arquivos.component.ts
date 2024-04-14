import { Component, Input, OnInit } from '@angular/core';
import { Collapse, initTWE } from "tw-elements";
import { ListaCompartilhadaArquivo } from '../../model/ListaCompartilhadaArquivo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proposta-arquivos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proposta-arquivos.component.html',
  styleUrl: './proposta-arquivos.component.css'
})
export class PropostaArquivosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Inicialização do tw-elements
    initTWE({ Collapse });
    this.accordionItems = this.data.map(item => ({
      id: item.id,
      title: item.permissionamento.arquivo.descricao,
      content: item.permissionamento.arquivo,
      collapsed: true
    }));
  }

  @Input()
  data!: ListaCompartilhadaArquivo[];

  accordionItems: any[] = [];

  toggleAccordion(item: any): void {
    item.collapsed = !item.collapsed;
  }

}
