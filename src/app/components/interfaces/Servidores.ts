import { Espaco } from "./Espaco";

export interface Servidores {
    id_servidor: number;
    id_espaco: Espaco[];
    nome: string;
    email: string;
    num_telefone: string;
    siape: string;
}