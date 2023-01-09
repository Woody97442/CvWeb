import { Component, OnInit } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Engine, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import {
  faYoutube,
  faTwitter,
  faTwitch,
  faInstagram,
  faFacebook,
  faGithub,
  faGitlab
} from '@fortawesome/free-brands-svg-icons';

import {
  faLocationDot,
  faPhoneVolume,
  faPaperPlane,
  faCakeCandles,
  faFlag,
  faCarRear,
  faClock
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  
  title = 'CvWebBrianWood';


  // brand icons
    faYoutube = faYoutube;
    faTwitter = faTwitter;
    faTwitch = faTwitch;
    faInstagram = faInstagram;
    faFacebook = faFacebook;
    faGithub = faGithub;
    faGitlab = faGitlab;


    // solid icon
    faLocationDot = faLocationDot ;
    faPhoneVolume = faPhoneVolume ;
    faPaperPlane = faPaperPlane ;
    faCakeCandles = faCakeCandles ;
    faFlag = faFlag ;
    faCarRear = faCarRear ;
    faClock = faClock ;

  ngOnInit(): void {}

  constructor(){

  }
  
  id = "tsparticles";

  particlesOptions = {

        background: {
            color: {
            value: ""
            },
        },

        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: HoverMode.repulse,
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
  };  

  particlesLoaded(): void {}

  async particlesInit(engine: Engine){
      await loadFull(engine);
  }
}
