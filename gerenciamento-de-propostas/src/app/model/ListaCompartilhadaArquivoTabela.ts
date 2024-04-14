import { Disciplina } from "./Disciplina";
import { Etapa } from "./Etapa";
import { Projeto } from "./Projeto";

export interface ListaCompartilhadaArquivoTabela {
  lista_compartilhada_id: number;
  descricao: string;
  data: string;
  disciplinas: Disciplina[];
  etapas: Etapa[];
  projeto: Projeto;
};
