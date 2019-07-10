import { Component } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        // todo использование  query (назначение анимации на конкретный элемент)
        query('.panel-heading', [
          style({
            transform: 'translateY(-300px)',
            opacity: 0,
          }),
          animate(500, )
        ]),
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AppComponent {
  showPanel = false;
  showParagraph = true;
}
