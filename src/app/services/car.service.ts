import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string='https://freeapi.gerasim.in/api/CarRentalApp/';

  constructor(private http: HttpClient) { }
  getAllCars(){
    return this.http.get('${this.apiUrl)GetCars')
  }
  createCar(obj:any){
    return this.http.post('${this.apiUrl)CreateNewCars',obj)

  }
  updateCar(obj:any){
    return this.http.put('${this.apiUrl)UpdateCar',obj)

  }
  
  
}
