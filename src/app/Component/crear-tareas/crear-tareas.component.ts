
import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-crear-tareas',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatDatepickerModule,MatInputModule],
  templateUrl: './crear-tareas.component.html',
  providers: [NativeDateAdapter],
  styleUrls: ['./crear-tareas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrearTareasComponent {

}
