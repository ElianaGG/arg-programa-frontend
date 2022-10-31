import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-mispoyectos',
  templateUrl: './mispoyectos.component.html',
  styleUrls: ['./mispoyectos.component.css']
})
export class MispoyectosComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(private proyectoS: ProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoS.lista().subscribe(
      data => {
        this.proyecto= data;
      }
    )
  }

  delete(id: number) {
    if (id != undefined) {
      this.proyectoS.delete(id).subscribe(
        data => {
          this. cargarProyecto();
        },
        err => {
          alert("No se pudo borrar proyecto");
        }
      )
    }
  }
}
