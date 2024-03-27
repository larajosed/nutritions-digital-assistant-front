import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterTableService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllProvinces() {
    const provinces = this.http.get(`${this.url}/provinces`);
    return provinces;
  }

  getLocationByProvinceId(idProvince: number) {
    const locations = this.http.get(`${this.url}/location/${idProvince}`);
    return locations;
  }
}
