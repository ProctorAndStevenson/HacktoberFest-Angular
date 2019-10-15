import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BackButtonComponent implements OnInit {

  @Input() url = '/';
  constructor() { }

  ngOnInit() {
  }

}
