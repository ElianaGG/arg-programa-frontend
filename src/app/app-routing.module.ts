import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/mispoyectos/editproyecto.component';
import { NewproyectoComponent } from './components/mispoyectos/newproyecto.component';
import { EditPerfilComponent } from './components/perfil/edit-perfil.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexperiencia', component: NewExperienciaComponent},
  {path:'editexperiencia/:id', component: EditExperienciaComponent},
  {path:'nuevaeducacion', component: NeweducacionComponent},
  {path:'editeducacion/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editperfil/:id', component: EditPerfilComponent},
  { path: 'nuevoproyecto', component: NewproyectoComponent},
  { path: 'editproyecto/:id', component: EditproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
