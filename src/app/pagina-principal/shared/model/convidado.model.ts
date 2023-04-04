import { Presente } from "./presente.model";

export class Convidado{

    id:number = 0;
    nome: string = '';
    confirmado: boolean = false;
    qtdAcompanhantes: number = 0; 
    presente: Presente = new Presente(); 
}