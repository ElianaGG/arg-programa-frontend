import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  persona: Persona = null;

  constructor(private activatedRoute: ActivatedRoute, private personaService: PersonaService,  private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      },
      err =>{
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void { 
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate([''])
      },
      err => {
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
   }
  
  uploadImage($event:any){}
}
