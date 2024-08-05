import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioPersonaComponent } from "./components/formulario-persona/formulario-persona.component";
import { FormSearchComponent } from "./components/form-search/form-search.component";
import { PersonaListadoComponent } from "./components/persona-listado/persona-listado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    FormularioPersonaComponent,
    FormSearchComponent,
    PersonaListadoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listado de Personas';

 


 

  
}
