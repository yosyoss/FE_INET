import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router){}

  imgSrc: string = 'assets/images/ari.png'
  imgAlt: string = 'bg-1'
  imgSrc2: string = 'assets/images/rian.jpg'
  imgAlt2: string = 'bg-2'
  imgSrc3: string = 'assets/images/chris.jpg'
  imgAlt3: string = 'bg-3'
  imgSrc4: string = 'assets/images/yos.jpg'
  imgAlt4: string = 'bg-4'
}
