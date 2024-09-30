import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareasComponent } from './Component/crear-tareas/crear-tareas.component';
import { ListarTareasComponent } from './Component/listar-tareas/listar-tareas.component';


const routes: Routes = [
  {path: '' , component: ListarTareasComponent},
  {path: 'crear' , component: CrearTareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
