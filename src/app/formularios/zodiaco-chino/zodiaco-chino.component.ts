import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CalculosZodiaco } from './calculos-zodiaco';

@Component({
  selector: 'app-zodiaco-chino',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './zodiaco-chino.component.html',
  styleUrls: ['./zodiaco-chino.component.css']
})
export class ZodiacoChinoComponent {
  formulario: FormGroup;
  mostrarResultado = false;
  resultado: any = {};

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  imprimir() {
    if (this.formulario.valid) {
      const datos = this.formulario.value;

      const edad = CalculosZodiaco.calcularEdad(datos.anio);
      const signo = CalculosZodiaco.obtenerSignoChino(datos.anio);
      const imagen = CalculosZodiaco.obtenerImagenSigno(signo);

      this.resultado = {
        nombre: datos.nombre,
        apaterno: datos.apaterno,
        amaterno: datos.amaterno,
        edad: edad,
        signo: signo,
        imagen: imagen
      };

      this.mostrarResultado = true;

    } else {
      alert('Por favor completa todos los campos');
    }
  }

  limpiar() {
    this.formulario.reset();
    this.mostrarResultado = false;
    this.resultado = {};
  }
}