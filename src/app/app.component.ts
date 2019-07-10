import { Component } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        group([
          query(':self', [
            style({
              opacity: 0,
            }),
            animate(300)
          ]),
          // todo использование  query (назначение анимации на конкретный элемент)
          query('.panel-heading', [
            style({
              transform: 'translateY(-300px)',
              opacity: 0,
            }),
            animate(300)
          ]),
          query('.panel-body', [
            style({
              transform: 'translateX(-100%)',
              opacity: 0,
            }),
            animate(300),
          ]),
          query('.panel-footer', [
            style({
              transform: 'translateY(100%)',
              opacity: 0,
            }),
            animate(300),
          ])
        ]),
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ]),
      transition('* => *', [
        query(':enter', [
          style({
            transform: 'scale(1)'
          }),
          animate(200, style({
            transform: 'scale(1.1)'
          })),
          animate(100)
        ], {optional: true}),
        query('div p, button', [
          animate(300, style({
            color: 'red'
          })),
          animate(200)
        ])
      ])
    ])
  ]
})
export class AppComponent {
  showPanel = false;
  showParagraph = true;

/*
    :enter /:leave  => Запросить добавленные / удаленные элементы

    :animating  => Запросить все элементы, которые в данный момент воспроизводят анимацию

    @triggerName  => Запросить все элементы, которые используют этот анимационный триггер

    @*  => Запросить все элементы, которые имеют ЛЮБОЙ  анимационный триггер

    :self  => Запросить родительский элемент (то есть тот, к которому был применен триггер, инициирующий переход)
*/
}


