import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona-listado',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './persona-listado.component.html',
  styleUrl: './persona-listado.component.css'
})
export class PersonaListadoComponent {
  personas : Persona [] = [];
  personaSelect ?:Persona;
  constructor(
    private personaService: PersonaService
  ){
    this.personas = this.personaService.listarPersonas();
  }

  onSelect(e:any){
    this.personaSelect = e.data;
    this.personaService.editarPersona(this.personaSelect?.id||0);
  }

  


}
