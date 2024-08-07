import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { DOCUMENT } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  fakeImages:string[ ]=[
    "./assets/images/poert1.png",
    "./assets/images/poert2.png",
    "./assets/images/poert3.png",
    "./assets/images/poert1.png",
    "./assets/images/poert2.png",
    "./assets/images/poert3.png",
  ];
  isShow:boolean=false;
  imagePath:string="";
  @ViewChild("layer") imageLayer!:ElementRef


  showImage(e:any):void{
    this.isShow = true;
    this.imagePath=e;
   
  }

  closeShow(e:MouseEvent):void{
   let ele=  e.target as HTMLElement;
    console.log(e)
    if(ele.tagName !="IMG"){
        this.isShow =false;
    }
  }
}
