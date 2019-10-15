import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { cardsData } from '../../data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  public cards = cardsData;

  constructor() { }

  ngOnInit() {
  }

}
