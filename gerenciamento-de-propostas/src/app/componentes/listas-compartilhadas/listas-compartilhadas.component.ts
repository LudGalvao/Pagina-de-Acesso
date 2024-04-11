
import { ListaCompartilhadaArquivoTabela } from '../../model/ListaCompartilhadaArquivoTabela';
import { ListaCompartilhadaArquivo } from '../../model/ListaCompartilhadaArquivo';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Disciplina } from '../../model/Disciplina';
import { Etapa } from '../../model/Etapa';
import { Projeto } from '../../model/Projeto';
import { ListaCompartilhadaArquivoService } from '../../services/lista-compartilhada-arquivo.service';
import { HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs';

@Component({
  selector: 'app-listas-compartilhadas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet, HttpClientModule],
  templateUrl: './listas-compartilhadas.component.html',
  styleUrl: './listas-compartilhadas.component.css',
  providers: [ListaCompartilhadaArquivoService]
})
export class ListaCompartilhadaComponent implements OnInit {

  constructor(private service : ListaCompartilhadaArquivoService) {}

  projetoFilter: string = '';
  disciplinaFilter: string = '';
  etapaFilter: string = '';

  items : ListaCompartilhadaArquivo[] = [];

  listaCompartilhadaUnica : ListaCompartilhadaArquivoTabela[] = [];
  listasFiltradas: ListaCompartilhadaArquivoTabela[] = [];
  projetosUnicos: string[] = [];
  disciplinasUnicas: string[] = [];
  etapasUnicas: string[] = [];

  ngOnInit() {
    this.loadListas().subscribe(data => {
      this.items = data;
      this.listaCompartilhadaUnica = this.reestruturarItens(this.items);
      console.log(this.listaCompartilhadaUnica);
      this.projetosUnicos = this.getProjetosUnicos();
      this.disciplinasUnicas = this.getDisciplinasUnicas();
      this.etapasUnicas = this.getEtapasUnicas();
      this.filtrarItens();
    });
}

loadListas(){
  return this.service.getListas().pipe(
    tap(data => console.log(data))
  );
}

reestruturarItens(items: ListaCompartilhadaArquivo[]): ListaCompartilhadaArquivoTabela[] {
  const result: ListaCompartilhadaArquivoTabela[] = [];

  items.forEach((item) => {
    const itemExistente = result.find(
      (ri) => ri.lista_compartilhada_id === item.lista_compartilhada.id
    );

    const disciplina: Disciplina = {
      id: item.permissionamento.disciplina.id,
      nome: item.permissionamento.disciplina.nome,
    };

    const etapa: Etapa = {
      id: item.permissionamento.etapa.id,
      nome: item.permissionamento.etapa.nome,
    };

    const projeto: Projeto = {
      id: item.permissionamento.projeto.id,
      nome: item.permissionamento.projeto.nome,
    };

    if (itemExistente) {
      if (!itemExistente.disciplinas.some(obj => JSON.stringify(obj) === JSON.stringify(disciplina))) {
        itemExistente.disciplinas.push(disciplina);
      }
      if (!itemExistente.etapas.some(obj => JSON.stringify(obj) === JSON.stringify(etapa))){
        itemExistente.etapas.push(etapa);
      }
    } else {
      result.push({
        lista_compartilhada_id: item.lista_compartilhada.id,
        descricao: item.lista_compartilhada.descricao,
        data: item.lista_compartilhada.data,
        disciplinas: [disciplina],
        etapas: [etapa],
        projeto,
      });
    }
  });

  return result;
}

formatarNomesDisciplinas(disciplinas: any[]): string {
  return disciplinas.map(d => d.nome).join(' / ');
}

formatarNomesEtapas(etapas: any[]): string {
  return etapas.map(d => d.nome).join(' / ');
}


filtrarItens() {
  this.listasFiltradas = this.listaCompartilhadaUnica.filter(item => {
    const encontraProjeto = this.projetoFilter === '' ||
                         (typeof item.projeto.nome === 'string' &&
                          item.projeto.nome.toLowerCase().includes(this.projetoFilter.toLowerCase()));

    const encontraDisciplina = this.disciplinaFilter === '' ||
                            (item.disciplinas.some((d: { nome: string; }) =>
                               d.nome &&
                               typeof d.nome === 'string' &&
                               d.nome.toLowerCase().includes(this.disciplinaFilter.toLowerCase())
                             ));

    const encontraEtapa = this.etapaFilter === '' ||
                       (item.etapas.some((e: { nome: string; }) =>
                          e.nome &&
                          typeof e.nome === 'string' &&
                          e.nome.toLowerCase().includes(this.etapaFilter.toLowerCase())
                        ));

    return encontraProjeto && encontraDisciplina && encontraEtapa;});
  }

  getProjetosUnicos(): string[] {
    return [...new Set(this.listaCompartilhadaUnica.map(item => item.projeto.nome))];
  }

  getDisciplinasUnicas(): string[] {
    let allDisciplinas: string[] = [];

    this.listaCompartilhadaUnica.forEach(item => {
      allDisciplinas = allDisciplinas.concat(item.disciplinas.map((d: { nome: any; }) => d.nome));
    });

    return [...new Set(allDisciplinas)];
  }

  getEtapasUnicas(): string[] {
    let allEtapas: string[] = [];

    this.listaCompartilhadaUnica.forEach(item => {
      allEtapas = allEtapas.concat(item.etapas.map((d: { nome: any; }) => d.nome));
    });

    return [...new Set(allEtapas)];
  }

  limpar(){
    this.projetoFilter = '';
    this.disciplinaFilter = '';
    this.etapaFilter = '';
    this.filtrarItens();
  }
}
