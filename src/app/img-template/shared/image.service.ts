import { Injectable } from "@angular/core";

@Injectable()

export class ImageService{

    visibleImages: { id: number; title: string; url: string; }[] = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }

}


const IMAGES = [
    {"id": 1, "title":"", "url": "assets/img/album/0000.png"},
    {"id": 2, "title":"", "url": "assets/img/album/0001.jpg"},
    {"id": 3, "title":"", "url": "assets/img/album/0002.jpg"},
    {"id": 4, "title":"", "url": "assets/img/album/0003.jpg"},
    {"id": 5, "title":"", "url": "assets/img/album/0004.png"},
    {"id": 6, "title":"", "url": "assets/img/album/0005.png"},
    {"id": 7, "title":"", "url": "assets/img/album/0006.png"},
    {"id": 8, "title":"", "url": "assets/img/album/0007.png"},
    {"id": 9, "title":"", "url": "assets/img/album/0008.png"},
    {"id": 10, "title":"", "url": "assets/img/album/0009.PNG"},
    {"id": 12, "title":"", "url": "assets/img/album/0010.PNG"},
    {"id": 13, "title":"", "url": "assets/img/album/0011.PNG"},
    {"id": 14, "title":"", "url": "assets/img/album/0012.PNG"},
    {"id": 15, "title":"", "url": "assets/img/album/0013.PNG"},
    {"id": 16, "title":"", "url": "assets/img/album/0014.PNG"},
    {"id": 17, "title":"", "url": "assets/img/album/0015.PNG"},
    {"id": 18, "title":"", "url": "assets/img/album/0016.PNG"},
    {"id": 19, "title":"", "url": "assets/img/album/0017.png"},
    {"id": 20, "title":"", "url": "assets/img/album/0018.jpg"},
    {"id": 21, "title":"", "url": "assets/img/album/0019.png"},
    {"id": 22, "title":"", "url": "assets/img/album/0020.jpg"},
    {"id": 23, "title":"", "url": "assets/img/album/0021.png"},
    {"id": 24, "title":"", "url": "assets/img/album/0022.png"},
    {"id": 25, "title":"", "url": "assets/img/album/0023.png"},
    {"id": 26, "title":"", "url": "assets/img/album/0024.jpg"},
    {"id": 27, "title":"", "url": "assets/img/album/0025.png"},
    {"id": 28, "title":"", "url": "assets/img/album/0027.jpg"},
    {"id": 29, "title":"", "url": "assets/img/album/0028.png"},
    {"id": 30, "title":"", "url": "assets/img/album/0029.PNG"},
    {"id": 31, "title":"", "url": "assets/img/album/0030.PNG"},
    {"id": 32, "title":"", "url": "assets/img/album/0031.PNG"},
    {"id": 33, "title":"", "url": "assets/img/album/0032.png"},
    {"id": 34, "title":"", "url": "assets/img/album/0033.jpg"},
    {"id": 35, "title":"", "url": "assets/img/album/0034.jpg"},
    {"id": 36, "title":"", "url": "assets/img/album/0035.jpg"},
    {"id": 37, "title":"", "url": "assets/img/album/0036.jpg"},
    {"id": 38, "title":"", "url": "assets/img/album/0037.jpg"},
    {"id": 39, "title":"", "url": "assets/img/album/0038.jpg"},
    {"id": 40, "title":"", "url": "assets/img/album/0039.jpg"},
    {"id": 41, "title":"", "url": "assets/img/album/0040.jpg"},
    {"id": 42, "title":"", "url": "assets/img/album/0041.jpg"},
    {"id": 43, "title":"", "url": "assets/img/album/0042.jpg"},
    {"id": 44, "title":"", "url": "assets/img/album/0043.jpg"},
    {"id": 45, "title":"", "url": "assets/img/album/0044.jpg"},
    {"id": 46, "title":"", "url": "assets/img/album/0045.jpg"},
    {"id": 47, "title":"", "url": "assets/img/album/0046.jpg"},
    {"id": 48, "title":"", "url": "assets/img/album/0047.jpg"},
    {"id": 49, "title":"", "url": "assets/img/album/0048.jpg"},
    {"id": 50, "title":"", "url": "assets/img/album/0049.jpg"},







]