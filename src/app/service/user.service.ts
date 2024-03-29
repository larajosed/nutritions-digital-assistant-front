import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  saveUser(user: any) {
    return this.http.post(`${this.url}/save/user`, user);
  }

  getUsuario(email: any, password: any) {
    return this.http.get(`${this.url}/user`, {
      params: {
        email: email,
        password: password,
      },
    });
  }
}
