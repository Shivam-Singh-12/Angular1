import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent {
  @Output() parentComponent: EventEmitter<any> = new EventEmitter()

  ngOnInit(){
    
  }
  sendData(){
    let item = ({name:"ANIL KUMAR SINGH", age:50});
    this.parentComponent.emit(item);

  }

}
