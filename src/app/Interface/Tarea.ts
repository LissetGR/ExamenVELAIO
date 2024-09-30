import { Persona } from "./Persona";

export interface Tarea{
   nombre: string,
   fecha: Date,
   completada:boolean,
   personas:Persona[],
}
