import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() headerChild ?: string;

  @Output() headerChange = new EventEmitter<string>();

  changeHeader(){
    console.log(this.headerChild);
    this.headerChange.emit(this.headerChild);
  }
}
