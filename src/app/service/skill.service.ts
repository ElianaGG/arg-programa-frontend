import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skURL = 'https://argprogramabackend.herokuapp.com/skill/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skURL + 'lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.skURL + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.skURL, skill)
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.skURL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skURL + `delete/${id}`);
  }
}
