export interface UsuarioInterface{
    correo?: string;
    clave?: string;
    nombres?:  string ;
    apellidos?: string;
    cargo?: string ;
    telefono?: string ;
    rol?: string ;
    external_usuario?: string ;
}

export interface InfoermacionRaizInterface {
  data?: any;
  success?: boolean;
  mensaje?: string;
 }
