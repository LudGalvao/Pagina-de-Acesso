import { Empresa } from "./Empresa"
import { Usuario } from "./Usuario"


export interface ListaCompartilhadaArquivo{
    id: number,
    permissionamento:{
        permissionamento_id: number,
        projeto_id: number,
        disciplina_id: number,
        grupo_id: number,
        permissionamento_tipo: string,
        arquivo_id: number,
        etapa_id: number,
        usuario: Usuario,
        empresa: Empresa
    },

    lista_compartilhada:{
        lista_compartilhada_id: number,
        lista_compartilhada_descricao: string,
        lista_compartilhada_data: string
    },
    lista_compartilhada_arquivo_acesso: string
}