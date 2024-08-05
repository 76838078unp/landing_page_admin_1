import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  listadoPersonas: Persona[] = [
  ];
  personaEditId = new EventEmitter<number>();
  constructor() { }

  agregarPersona(persona: Persona){
    this.listadoPersonas.push(persona);
  }

  listarPersonas(){
    return this.listadoPersonas;
  }

  eliminarPersona(id: number){
    this.listadoPersonas = this.listadoPersonas.filter((persona) => persona.id != id);
  }

  editarPersona(id:number){
    this.personaEditId.emit(id);
  }

  actualizarPersona(id: number, persona: Persona){
    this.listadoPersonas = this.listadoPersonas.map((p) => {
      if(p.id == id){
        return persona;
      }
      return p;
    });
  }
}
