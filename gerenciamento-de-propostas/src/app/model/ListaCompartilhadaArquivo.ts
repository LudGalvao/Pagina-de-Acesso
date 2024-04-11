import { ListaCompartilhada } from './ListaCompartilhada';
import { Disciplina } from "./Disciplina";
import { Etapa } from "./Etapa";
import { Projeto } from "./Projeto";
import { Arquivo } from './Arquivo';
import { Usuario } from './Usuario';

export interface ListaCompartilhadaArquivo {
  id: number;
  lista_compartilhada: ListaCompartilhada;
  permissionamento: {
    id: number;
    projeto: Projeto;
    disciplina: Disciplina;
    grupo_id: number;
    arquivo: Arquivo;
    etapa: Etapa;
    usuario: Usuario;
  },
  arquivo_acesso : string,
}
