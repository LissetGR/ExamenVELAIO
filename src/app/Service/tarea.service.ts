import { Injectable } from '@angular/core';
import { Tarea } from '../Interface/Tarea';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private tareas: Tarea[] = [
    {
      nombre: 'Desarrollar la interfaz de usuario',
      fecha: new Date('2024-10-15'),
      completada: true,
      personas: [
        {
          nombre: 'Juan Pérez',
          edad: 25,
          habilidades: ['JavaScript', 'Angular'],
        },
        { nombre: 'Ana López', edad: 30, habilidades: ['Java', 'Spring'] },
      ],
    },
    {
      nombre: 'Implementar la lógica de negocio',
      fecha: new Date('2024-10-20'),
      completada: false,
      personas: [
        { nombre: 'Carlos Ruiz', edad: 28, habilidades: ['Python', 'Django'] },
        { nombre: 'Laura Martínez', edad: 35, habilidades: ['C#', 'ASP.NET'] },
      ],
    },
    {
      nombre: 'Realizar pruebas de la aplicación',
      fecha: new Date('2024-10-25'),
      completada: true,
      personas: [
        { nombre: 'Ana López', edad: 30, habilidades: ['Java', 'Spring'] },
        { nombre: 'Carlos Ruiz', edad: 28, habilidades: ['Python', 'Django'] },
      ],
    },
    {
      nombre: 'Desplegar la aplicación en producción',
      fecha: new Date('2024-10-30'),
      completada: true,
      personas: [
        {
          nombre: 'Juan Pérez',
          edad: 25,
          habilidades: ['JavaScript', 'Angular'],
        },
        { nombre: 'Laura Martínez', edad: 35, habilidades: ['C#', 'ASP.NET'] },
      ],
    },
    {
      nombre: 'Actualizar la documentación técnica',
      fecha: new Date('2024-11-01'),
      completada: true,
      personas: [
        { nombre: 'Carlos Ruiz', edad: 28, habilidades: ['Python', 'Django'] },
        { nombre: 'Ana López', edad: 30, habilidades: ['Java', 'Spring'] },
      ],
    },
    {
      nombre: 'Crear pruebas unitarias',
      fecha: new Date('2024-11-05'),
      completada: true,
      personas: [
        {
          nombre: 'Juan Pérez',
          edad: 25,
          habilidades: ['JavaScript', 'Angular'],
        },
        { nombre: 'Laura Martínez', edad: 35, habilidades: ['C#', 'ASP.NET'] },
      ],
    },
    {
      nombre: 'Configurar el servidor de producción',
      fecha: new Date('2024-11-10'),
      completada: false,
      personas: [
        { nombre: 'Carlos Ruiz', edad: 28, habilidades: ['Python', 'Django'] },
        { nombre: 'Ana López', edad: 30, habilidades: ['Java', 'Spring'] },
      ],
    },
    {
      nombre: 'Revisar el código del proyecto',
      fecha: new Date('2024-11-15'),
      completada: false,
      personas: [
        {
          nombre: 'Juan Pérez',
          edad: 25,
          habilidades: ['JavaScript', 'Angular'],
        },
        { nombre: 'Laura Martínez', edad: 35, habilidades: ['C#', 'ASP.NET'] },
      ],
    },
    {
      nombre: 'Hacer una presentación para el cliente',
      fecha: new Date('2024-11-20'),
      completada: true,
      personas: [
        { nombre: 'Ana López', edad: 30, habilidades: ['Java', 'Spring'] },
        { nombre: 'Carlos Ruiz', edad: 28, habilidades: ['Python', 'Django'] },
        {
          nombre: 'Juan Pérez',
          edad: 25,
          habilidades: ['JavaScript', 'Angular'],
        },
      ],
    },
    {
      nombre: 'Implementar feedback del cliente',
      fecha: new Date('2024-11-25'),
      completada: false,
      personas: [
        {
          nombre: 'Juan Pérez',
          edad: 25,
          habilidades: ['JavaScript', 'Angular'],
        },
        { nombre: 'Laura Martínez', edad: 35, habilidades: ['C#', 'ASP.NET'] },
      ],
    },
  ];

  public getTarea() {
    return this.tareas;
  }

  public filtrarTareas(parametro: string) {
    console.log(parametro);
    if (parametro == 'Pendientes') {
      return this.tareas.filter((tarea) => !tarea.completada);
    }
    if (parametro == 'Completadas') {
      return this.tareas.filter((tarea) => tarea.completada);
    } else {
      return this.tareas;
    }
  }

  public eliminarTarea(nombre: string) {
    for (let i = 0; i < this.tareas.length; i++) {
      if (this.tareas[i].nombre == nombre) {
        this.tareas.splice(i, 1);
      }
    }
    return this.tareas;
  }

  marcarComoCompletada(nombre: string) {
    for (let i = 0; i < this.tareas.length; i++) {
      if (this.tareas[i].nombre == nombre) {
        this.tareas[i].completada = true;
      }
    }
    return this.tareas;
  }

  eliminarPersonaAsociada(nombrePersona: string, nombreTarea: string) {
    for (let i = 0; i < this.tareas.length; i++) {
      if (this.tareas[i].nombre === nombreTarea) {
        for (let j = 0; j < this.tareas[i].personas.length; j++) {
          if (this.tareas[i].personas[j].nombre === nombrePersona) {
            this.tareas[i].personas.splice(j, 1);
            break;
          }
        }
        break;
      }
    }
    return this.tareas;
  }

  constructor() {}
}
