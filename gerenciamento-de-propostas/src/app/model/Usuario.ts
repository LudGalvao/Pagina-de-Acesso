import { Empresa } from './Empresa'

export interface Usuario{
    usuario_id: number,
    usuario_tipo: number,
    usuario_nome: string,
    usuario_email: string,
    usuario_cpf: string,
    usuario_cnpj: string,
    usuario_endereco: string,
    usuario_status: number,
    usuario_cargo: string,
    empresa: Empresa
}