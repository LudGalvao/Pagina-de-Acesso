import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaCompartilhadaArquivo } from '../../model/ListaCompartilhadaArquivo';
import { ListaCompartilhadaArquivoService } from '../../services/lista-compartilhada-arquivo.service';
import { HttpClientModule } from '@angular/common/http';
import { PropostaArquivosComponent } from "../proposta-arquivos/proposta-arquivos.component";
import { PropostaAcessoComponent } from "../proposta-acesso/proposta-acesso.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-proposta',
    standalone: true,
    templateUrl: './proposta.component.html',
    styleUrl: './proposta.component.css',
    providers: [ListaCompartilhadaArquivoService],
    imports: [RouterOutlet, HttpClientModule, PropostaArquivosComponent, PropostaAcessoComponent, MatIconModule]
})
export class PropostaComponent {

  constructor(private router: Router, private route: ActivatedRoute, private service : ListaCompartilhadaArquivoService) {
    let id = this.route.snapshot.paramMap.get('proposta_id');
    this.service.getListasByListaCompartilhadaID(id).subscribe((data) => {
      console.log(data);
      this.propostas = data;
    })
  }

  propostas : ListaCompartilhadaArquivo[] = [];
  rota : string = 'arquivos';



  navegarParaArquivos() {
    this.router.navigate(['arquivos2'], { relativeTo: this.route });
    this.rota = 'arquivos';

  }

  navegarParaAcesso() {
    this.router.navigate(['acesso'], { relativeTo: this.route });
    this.rota = 'acesso';
  }

}
