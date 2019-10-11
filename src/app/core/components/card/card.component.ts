import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CardModel} from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CardComponent implements OnInit {

  @Input() card: CardModel;

  constructor() { }

  ngOnInit() {
  }

}
