import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs';
import {
  UsuarioInterface,
  InfoermacionRaizInterface,
} from '../../models/usuario';
import { MainService } from './main.service';

// @Injectable({
//     providedIn: 'root'
// })

@Injectable()
export class AuthService {
  //variables globables
  datosUsuario: UsuarioInterface | undefined;

  estaLogeado = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient // private router: Router,
  ) {}

  iniciarSesion(data: any, urlDireccion?: string) {
    //console.log('test')
    const url = `${MainService.apiURL}/login`;

    this.http
      .post<InfoermacionRaizInterface>(url, data)
      .pipe(pluck('data'))
      .subscribe((dt: UsuarioInterface) => {
        console.log(dt);
        this.datosUsuario = dt;
        localStorage.setItem('datosUsuario', JSON.stringify(this.datosUsuario));

        this.estaLogeado.next(true);
      });
  }
}
