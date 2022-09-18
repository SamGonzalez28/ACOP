import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioInterface } from 'src/app/models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  formRegistro:FormGroup;

  constructor
  (private fb: FormBuilder,
   private user: UsuarioService
  ) {

    this.formRegistro = this.fb.group({
      nombres:[null, Validators.required],
      apellidos:[null, Validators.required],
      correo:[null, Validators.required],
      clave:[null, Validators.required],
      telefono:[null, Validators.required],
      cargo:[null, Validators.required]
    });
   }


  ngOnInit(): void {
  }

  registro(){
    if (this.formRegistro.valid) {
       const data = this.formRegistro.value;
      this.user.registrarUsuario(data);


    }else{
      console.log('no valido')
    }
  }
}
