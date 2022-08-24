import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; //NO el de produccion, sino el de enviorment
import { Characters } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.baseUrl}/characters`);
  }

  getChatacterById(id: string): Observable<Characters> {
    return this.http.get<Characters>(`${this.baseUrl}/characters/${id}`);
  }

  getSuggestions(term: string): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.baseUrl}/characters?q=${term}&_limit=6`);
  }

  addCharacter(character: Characters): Observable<Characters> {
    return this.http.post<Characters>(`${this.baseUrl}/characters`, character);
  }

  updateCharacter(character: Characters): Observable<Characters> {
    return this.http.put<Characters>(`${this.baseUrl}/characters/${character.id}`, character);
  }

  deleteCharacter( id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/characters/${ id }`);
  }

}

