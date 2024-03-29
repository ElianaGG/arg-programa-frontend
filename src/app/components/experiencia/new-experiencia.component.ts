import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css'],
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descriptionExp: string = '';

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const experiencia = new Experiencia(this.nombreExp, this.descriptionExp);
    this.sExperiencia.save(experiencia).subscribe(
      (data) => {
        alert('Experiencia creada');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló al añadir experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
