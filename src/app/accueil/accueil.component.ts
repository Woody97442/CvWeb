import { Component, OnInit } from '@angular/core';
import {
  faJsSquare,
  faCss3,
  faHtml5,
  faAngular,
  faVuejs,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';




// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})


export class AccueilComponent implements OnInit{

    avatar:string =  "assets/img/LogoWoody.jpg";
    cplusicon:string =  "assets/img/c.svg";

    // brand icons
    faJsSquare = faJsSquare;
    faCss3 = faCss3;
    faHtml5 = faHtml5;
    faAngular = faAngular;
    faVuejs = faVuejs;
    faBootstrap = faBootstrap;

    constructor(){
    }

    ngOnInit(): void {}

}
