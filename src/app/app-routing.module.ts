import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareasComponent } from './Component/crear-tareas/crear-tareas.component';

const routes: Routes = [
  {path: '' , component: CrearTareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
