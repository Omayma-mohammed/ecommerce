import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseURL: string = 'https://ecommerce.routemisr.com';

  constructor(private _HttpClient: HttpClient) { }

  getAllBrands(numberOfPages: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/api/v1/brands?page=${numberOfPages}`);
  }

  getBrandById(id: string): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/api/v1/brands/${id}`);
  }
}

