import { Component, OnInit } from '@angular/core';
import { usuarioDTO } from 'src/app/Interface/usuariosDTO';
import { UsuarioServiceService } from 'src/app/Services/usuario-service.service';


@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {
  usuarios : any[]= [];
  dtoUsuario:usuarioDTO = {
    codigoCargo:0,
    codigoDepartamento :0
  };
  constructor(private srvUsuario:UsuarioServiceService){

  }
  ngOnInit(): void {
    this.consultarUsuarios();  
  }
  consultarUsuarios(){
    this.srvUsuario.getAllUsuarios(this.dtoUsuario).subscribe(resp=>{
      console.log(resp)
      this.usuarios = resp;
    });
  }
}
