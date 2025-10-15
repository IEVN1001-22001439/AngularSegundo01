import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DistanciaComponent {
  formulario: FormGroup;
  distancia: number = 0;
  proceso: string = '';

  private objDistancia = new Distancia();

  constructor() {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl('')
    });
  }

  calcularDistancia(): void {
    const x1 = Number(this.formulario.get('x1')?.value);
    const y1 = Number(this.formulario.get('y1')?.value);
    const x2 = Number(this.formulario.get('x2')?.value);
    const y2 = Number(this.formulario.get('y2')?.value);

    const resultado = this.objDistancia.calcular(x1, y1, x2, y2);
    this.distancia = resultado.distancia;
    this.proceso = resultado.proceso;
  }

  limpiar(): void {
    this.formulario.reset();
    this.distancia = 0;
    this.proceso = '';
  }
}