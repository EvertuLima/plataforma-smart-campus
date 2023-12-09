import { Espaco } from "./Espaco";

export interface Material {
    id_material: number;
    id_espaco: number;
    tombo: string;
    descricao: string;
    marca: string;
    modelo: string;
    estado: string;
}