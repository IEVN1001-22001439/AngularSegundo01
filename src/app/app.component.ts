import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AporBComponent } from './formularios/apor-b/apor-b.component';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZodiacoChinoComponent } from './formularios/zodiaco-chino/zodiaco-chino.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    NavbarComponent,
    AporBComponent,
    DistanciaComponent,
    ReactiveFormsModule,
    ZodiacoChinoComponent],
})
export class AppComponent implements OnInit {
  title = 'Angular Segundo';

  ngOnInit(): void {
    initFlowbite();
  }
}