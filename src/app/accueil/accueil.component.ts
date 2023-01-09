import { Component, OnInit } from '@angular/core';
import {
  faJsSquare,
  faCss3,
  faHtml5,
  faAngular,
  faVuejs,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { HttpClient } from '@angular/common/http';




// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})


export class AccueilComponent implements OnInit{

  // codeBarSaisi = new FormControl("");

    avatar:string =  "assets/img/LogoWoody.jpg";
    cplusicon:string =  "assets/img/c.svg";

    // brand icons
    faJsSquare = faJsSquare;
    faCss3 = faCss3;
    faHtml5 = faHtml5;
    faAngular = faAngular;
    faVuejs = faVuejs;
    faBootstrap = faBootstrap;



    constructor(private http: HttpClient){
    }

    ngOnInit(): void {
      this.LoadDataJson();
    }

    public LoadDataJson(){
      return this.http.get("assets/data/data.json")
      .subscribe((data) =>{
        let jsonObj = Object.create(data);

      });
    }

}
