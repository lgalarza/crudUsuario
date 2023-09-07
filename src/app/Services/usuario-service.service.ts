import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuarioDTO } from '../Interface/usuariosDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
 url='https://localhost:7139/api/usuarios/Getusuarios'
  constructor(private http:HttpClient) { 

  }

  getAllUsuarios(dtoUsuario:usuarioDTO)
  {
    return this.http.post<any>(this.url,dtoUsuario);
  }
}
