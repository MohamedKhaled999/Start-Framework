import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {



onInput(e:Event):void{
  
  let ele = e.target as HTMLInputElement;


  if(ele.value){
    ele.previousElementSibling?.classList.replace('top-10','top-0')
  }else{
    ele.previousElementSibling?.classList.replace('top-0','top-10')
  }
  
}




}
