import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
              private fb: FormBuilder,
              private auth: AuthService
              ) {

                this.formLogin = this.fb.group({
                  correo:[null, Validators.required],

                  clave:[null, Validators.required]
                });
              }

  ngOnInit(): void {

  }

  login(){
    if (this.formLogin.valid) {
      const data = this.formLogin.value;
     this.auth.iniciarSesion(data);


    }else{
      console.log('no valido')
    }


  }

}
