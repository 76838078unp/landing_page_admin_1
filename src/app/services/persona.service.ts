import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaEditId = new EventEmitter<number>();
  listadoPersonas = new EventEmitter<Persona[]>();
  listado:Persona[] = [];
  listaFilter:Persona[] = [];
  constructor() {
    this.listadoPersonas.emit(this.listado);
  }

  agregarPersona(persona: Persona){
    this.listado = [...this.listado, persona];
    this.listadoPersonas.emit(this.listado);
  }

  eliminarPersona(id: number){
    
    this.listado = this.listado.filter((p) => p.id != id);
    this.listadoPersonas.emit(this.listado);
  }

  editarPersona(id:number){
    this.personaEditId.emit(id);
  }

  actualizarPersona(id: number, persona: Persona){
    this.listado = this.listado.map((p) => {
      if(p.id == id){
        return persona;
      }
      return p;
    });
    this.listadoPersonas.emit(this.listado);
  }

  searchPersona(persona: Persona){
    let newLista = this.listado;
    if(persona.nombres){
      newLista = newLista.filter((p) => p.nombres.includes(persona.nombres));
    }
    if(persona.apellidos){
      newLista = newLista.filter((p) => p.apellidos.includes(persona.apellidos));
    }
    if(persona.dni){
      newLista = newLista.filter((p) => p.dni.includes(persona.dni));
    }
    this.listaFilter = newLista;
    this.listadoPersonas.emit(this.listaFilter);
  }
}
