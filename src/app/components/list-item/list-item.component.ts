import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
@Input()
item : any;
@Output() onDeleteOfItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(){
    console.log(this.item.id);
    this.onDeleteOfItem.emit(this.item.id);
  }

}
