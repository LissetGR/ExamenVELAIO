import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { TareaService } from 'src/app/Service/tarea.service';
import { Tarea } from 'src/app/Interface/Tarea';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioChange } from '@angular/material/radio';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-listar-tareas',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatRadioModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarTareasComponent {
  readonly panelOpenState = signal(false);
  selectedValue: string = '';
  displayedColumns: string[] = ['nombre', 'fecha', 'persona', 'opciones'];
  dataSource = new MatTableDataSource<Tarea>(this.tarea.getTarea());
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private tarea: TareaService, private router: Router) {}

  filtrarBusqueda(event: MatRadioChange) {
    this.dataSource = new MatTableDataSource<Tarea>(this.tarea.getTarea());
    this.dataSource = new MatTableDataSource<Tarea>(
      this.tarea.filtrarTareas(event.value)
    );
  }

  eliminarTarea(nombre: string) {
    this.dataSource = new MatTableDataSource<Tarea>(
      this.tarea.eliminarTarea(nombre)
    );
  }

  marcarComoCompletada(nombre: string) {
    this.dataSource = new MatTableDataSource<Tarea>(
      this.tarea.marcarComoCompletada(nombre)
    );
  }

  eliminarPersonaAsociada(nombrePersona: string, nombreTarea: string) {
    this.dataSource = new MatTableDataSource<Tarea>(
      this.tarea.eliminarPersonaAsociada(nombrePersona, nombreTarea)
    );
  }
}
