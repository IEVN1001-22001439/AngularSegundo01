import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Multiplica } from './multiplicacion';

@Component({
  selector: 'app-apor-b',
  templateUrl: './apor-b.component.html',
  imports: [CommonModule, ReactiveFormsModule]
})
export class AporBComponent {
  formulario!: FormGroup;
  resultado: string = '';
  objMult = new Multiplica();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });
  }

  multNumeros(): void {
    const numero1 = this.formulario.get('numero1')?.value;
    const numero2 = this.formulario.get('numero2')?.value;

    if (numero1 !== null && numero2 !== null) {
      this.resultado = this.objMult.multiplicar(numero1, numero2);
    }
  }

  limpiar(): void {
    this.formulario.reset();
    this.resultado = '';
  }
}