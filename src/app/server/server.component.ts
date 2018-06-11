import {Component} from '@angular/core';


@Component({
     selector:'app-server',
   // selector:'.app-server',
    templateUrl:'./server.component.html',
   // template:'<app-server></app-server><app-server></app-server>', 
    styleUrls:['./server.component.css'],


}) 
export class ServerComponent{
  isServerCreated:boolean;
  log=[];

  constructor() { 
    this.isServerCreated=false;
  }
  onCreateServer() { 
      this.isServerCreated=true;
      this.onToogleDetails();
    }
  
    onToogleDetails(){
      this.log.push(new Date());
      console.log(new Date());
      
    }
}

