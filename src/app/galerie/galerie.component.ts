import { Component, OnInit } from '@angular/core';
import { ImageService } from '../img-template/shared/image.service';



@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit{

  avatar : string =  "assets/img/LogoWoody.jpg";
  cplusicon : string =  "assets/img/c.svg";
  isDarken = false;

  visibleImages: any[] = [];

  constructor(private imageService: ImageService){
  
    this.visibleImages = this.imageService.getImages();

  }
  
  ngOnInit(){ 

  }
  
}