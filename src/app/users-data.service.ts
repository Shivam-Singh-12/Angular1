import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataType } from './userInterface';


// interface dataType{
//   name :string,
//   id : number,
//   indian : boolean
//   address : any
// }

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }

  getmodalData(){
    const data :dataType = {
      name : 'Shivam',
      id : 100,
      indian : true,
      address : '24/404, Noida'
    }
    return data;
  }

  getData(){
    return{
      name:'Shivam',
      age : 28,
      id : 12
    }
  }

  getuserData(){
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(url);
  }
}
