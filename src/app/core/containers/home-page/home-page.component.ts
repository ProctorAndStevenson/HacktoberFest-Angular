import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CardModel} from '../../components/card/card.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  public cards: Array<CardModel> = [
    //  Add your card in this section
    {
      artName: 'dummy',
      pageLink: '/dummy',
      imageLink: './assets/dummy.png',
      author: 'Dummy',
      githubLink: 'https://github.com/'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
