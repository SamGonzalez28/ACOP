import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs';
import { UsuarioInterface, InfoermacionRaizInterface } from '../../models/usuario';
import { MainService } from './main.service';



@Injectable()
export class UsuarioService{
    //variables globables

        //estaLogeado = new BehaviorSubject<boolean>(false);

        constructor(
            private http: HttpClient,
           // private router: Router,

        ){

        }


    registrarUsuario(data:any, urlDireccion?:string){
       console.log('test')
          const url = `${MainService.apiURL}/usuario/registro`;

          this.http.post<InfoermacionRaizInterface>(url, data).pipe(pluck('mensaje')).subscribe((dt:any) =>{
            console.log(dt)

         });


    }

}
