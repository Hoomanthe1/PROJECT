import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clicked = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  itemClicked(event: any){
    this.clicked.emit(event.target.innerText);
  }

  
  
  


  
  


  
}
