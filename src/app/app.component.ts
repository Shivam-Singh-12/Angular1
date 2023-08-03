import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';

interface dataType{
  name :string,
  id : number,
  indian : boolean
  address : any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shiva';
  // data = [];

  getmodalData(){
    const data :dataType = {
      name : 'Shivam',
      id : 100,
      indian : true,
      address : '24/404, Noida'
    }
    return data;
  }
  

  constructor(private user:UsersDataService){

    this.user.getuserData().subscribe( data => {
      console.log(data);
      // this.data= data;

    })
    // console.warn(this.user.getData())

    // let data = this.user.getData();
    // this.name = data.name;
  }
  // data ="Shivam"

  names="anil singh"
  today= Date.now();
  str="Hello Angular"
  val=10;


  data  = {
    name :'Shivam',
    age : 28
  }

  users = [
    {
      name : 'Anil',
      age : 50,
      Address : 'Delhi'
  
    },
    {
      name : 'kumar',
      age : 51,
      Address : 'Noida'
  
    },
    {
      name : 'singh',
      age : 52,
      Address : 'Gurgaon'
  
    }
  ]
  name: any;

  parentComponent(data: any){
    console.log(data)
    this.name = data.name
    
  }

}
