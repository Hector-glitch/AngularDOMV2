import {Component, OnInit} from '@angular/core';
import {CommonModule, UpperCasePipe} from '@angular/common';
// @ts-ignore
import {yellowSubmarine} from './funcions.js';
// @ts-ignore
import {changeSize} from "./funcions.js";
// @ts-ignore
import {countWords} from "./funcions.js";
// @ts-ignore
import {showDesplegable} from "./funcions.js";

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component implements OnInit{
  url: any
constructor() {
  // this.url = window.location
  this.url = document.URL

}
ngOnInit(){
  let maj = document.getElementById("ex1")!
  maj.innerHTML = maj.innerHTML.toUpperCase()

  yellowSubmarine()
  changeSize()
  countWords()
  showDesplegable()

  let img = document.getElementById("imatge") as HTMLImageElement
  img.src = "./assets/gatigos.jpg"
}
}

