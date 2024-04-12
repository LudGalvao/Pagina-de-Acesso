import { ArquivosComponent } from './componentes/arquivos/arquivos.component';
import { Routes } from '@angular/router';
import { ListaCompartilhadaComponent } from './componentes/listas-compartilhadas/listas-compartilhadas.component';
import { PropostaComponent } from './componentes/proposta/proposta.component';
import { PropostaArquivosComponent } from './componentes/proposta-arquivos/proposta-arquivos.component';
import { PropostaAcessoComponent } from './componentes/proposta-acesso/proposta-acesso.component';

export const routes: Routes = [
  { path: 'listas-compartilhadas', component: ListaCompartilhadaComponent},
  { path: 'arquivos', component: ArquivosComponent },
  { path: 'proposta/:proposta_id', component: PropostaComponent, children:[
    {path: 'arquivos2', component: PropostaArquivosComponent},
    {path: 'acesso', component: PropostaAcessoComponent},
    {path: '', redirectTo: 'arquivos2', pathMatch: 'full'}
  ]
}

];
