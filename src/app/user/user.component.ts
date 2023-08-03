import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() heros: any

  ngOnInit(){
    console.log(this.heros)
  }

  

}
