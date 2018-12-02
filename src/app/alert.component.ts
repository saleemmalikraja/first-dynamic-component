import { Component, Input, EventEmitter, Output } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-alert',
    template: `
    <section [@fadeInOut]>
     <h1 (click)="output.next('output')">Alert {{type}}</h1>
    <section>
  `,
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({  height: '200px',
                opacity: 1,
                backgroundColor: 'yellow'}),
                animate(2000, style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({  height: '300px',
                opacity: 1,
                backgroundColor: 'green'}),
                animate(2000, style({ opacity: 0 }))
            ])
        ])
    ],
})
export class AlertComponent {
    @Input() type = 'success';
    @Output() output = new EventEmitter();
}
