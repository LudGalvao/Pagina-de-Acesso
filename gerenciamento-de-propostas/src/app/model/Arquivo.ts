export interface Arquivo {
  id: number;
  usuario_id : number;
  descricao : string;
  data : string;
  versao : number;
  link : string;
  local_id : number;
  projeto_id : number;
  etapa_id : number;
  arquivo_id_pai : number | null;
}
