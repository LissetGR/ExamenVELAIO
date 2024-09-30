import { Injectable } from '@angular/core';
import{ Persona} from '../Interface/Persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personas: Persona[] = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        habilidades: ["JavaScript", "TypeScript", "Angular"]
    },
    {
        nombre: "Ana García",
        edad: 25,
        habilidades: ["Comunicación", "Gestión de Proyectos"]
    },
    {
        nombre: "Carlos Ruiz",
        edad: 35,
        habilidades: ["Python", "Data Analysis"]
    },
    {
        nombre: "María López",
        edad: 28,
        habilidades: ["Diseño Gráfico", "Photoshop"]
    },
    {
        nombre: "Lucía Martínez",
        edad: 22,
        habilidades: ["Marketing Digital", "SEO"]
    },
    {
        nombre: "Pedro Gómez",
        edad: 32,
        habilidades: ["Ciberseguridad", "Programación"]
    },
    {
        nombre: "Isabel Torres",
        edad: 29,
        habilidades: ["Recursos Humanos", "Coaching"]
    },
    {
        nombre: "Diego Sánchez",
        edad: 27,
        habilidades: ["Redes Sociales", "Estrategia"]
    },
    {
        nombre: "Laura Morales",
        edad: 31,
        habilidades: ["Desarrollo Web", "HTML", "CSS"]
    },
    {
        nombre: "Javier Jiménez",
        edad: 34,
        habilidades: ["Análisis de Datos", "Estadística"]
    }
];


  constructor() { }
}
