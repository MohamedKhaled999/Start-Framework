import { Element } from '@angular/compiler';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { copyFileSync } from 'fs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isShow:number=-1;
  @ViewChild('myLinks')links!:ElementRef;
  @ViewChild('myNav')nav!:ElementRef;


  showLinks():void{
    this.isShow *=-1;
    
    if (this.isShow==1) {
      
      this.links.nativeElement.classList.remove('h-0');
      this.links.nativeElement.classList.add(`h-[155px]`);


    }else{
      // this.links.nativeElement.classList.add('h-0')
      this.links.nativeElement.classList.add(`h-0`);
      this.links.nativeElement.classList.remove(`h-[155px]`);


    }
  
  }

  onScroll():void{
    console.log(window.scrollY);
    if (window.scrollY>50) {
      
      this.nav.nativeElement.classList.replace('py-6','py-2');
    }else{
      this.nav.nativeElement.classList.replace('py-2','py-6');
    }
  }
}
