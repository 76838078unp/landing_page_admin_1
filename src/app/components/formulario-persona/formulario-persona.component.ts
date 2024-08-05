import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-formulario-persona',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './formulario-persona.component.html',
  styleUrl: './formulario-persona.component.css'
})
export class FormularioPersonaComponent {
  form: FormGroup;
  isNew = true;
  isSave = false;
  isDelete = false;
  isCancel = true;
  personaEditar ?: Persona;
  constructor(
    private personaService: PersonaService
  ) { 
    this.form = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required])
    });
    personaService.personaEditId.subscribe((id) => {
      this.isNew = false;
      this.isSave = true;
      this.isDelete = true;
      this.isCancel = true;

      this.personaEditar = personaService.listado.find((p) => p.id == id);
      if(!this.personaEditar){
        alert('No se encontró la persona');
        return;
      }
      this.form.setValue({
        nombres: this.personaEditar.nombres||'',
        apellidos: this.personaEditar.apellidos||'',
        dni: this.personaEditar.dni||''
      });
      
    });
  }

  agregarPersona(){
    if (this.form.invalid) {
      alert('Formulario inválido');
      return;
    }
    let persona = new Persona(
      this.form.value.nombres,
      this.form.value.apellidos,
      this.form.value.dni
    );
    this.personaService.agregarPersona(persona);
    alert("agregado correctamente")
    this.form.reset();
    this.onCancelar()
  }


  actualizar(){
    if (this.form.invalid) {
      alert('Formulario inválido');
      return;
    }
    if(!this.personaEditar){
      alert('No hay persona para editar');
      return;
    }
    this.personaEditar.nombres = this.form.value.nombres;
    this.personaEditar.apellidos = this.form.value.apellidos;
    this.personaEditar.dni = this.form.value.dni;
    this.personaService.actualizarPersona(this.personaEditar.id, this.personaEditar);
    alert("actualizado correctamente")
    this.onCancelar()
  }

  onEliminar(){
    if(!this.personaEditar){
      alert('No hay persona para eliminar');
      return;
    }
    this.personaService.eliminarPersona(this.personaEditar.id);
    alert("eliminado correctamente")
    this.onCancelar()
  }
  onCancelar(){
    this.form.reset();
    this.personaEditar = undefined;
    this.isNew = true;
    this.isSave = false;
    this.isDelete = false;
    this.isCancel = true;
  }
}
