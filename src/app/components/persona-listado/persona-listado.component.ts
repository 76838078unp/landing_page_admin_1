import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-listado',
  standalone: true,
  imports: [
    TableModule,
    CommonModule
  ],
  templateUrl: './persona-listado.component.html',
  styleUrl: './persona-listado.component.css'
})
export class PersonaListadoComponent {
  personaSelect ?:Persona;
  personas: Persona[] = [];
  constructor(
    private personaService: PersonaService
  ){
    this.personaService.listadoPersonas.asObservable().subscribe((personas) => {
      this.personas = personas;
    });
    
  }

  onSelect(e:any){
    this.personaSelect = e.data;
    this.personaService.editarPersona(this.personaSelect?.id||0);
  }

  


}
