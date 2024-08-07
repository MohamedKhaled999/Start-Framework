import { Component, input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Output() itemEvent:EventEmitter<string>=new EventEmitter();
  onFireEvent(e:any):void{    
    this.itemEvent.emit(e.currentTarget.children[0].src)
  }
}
