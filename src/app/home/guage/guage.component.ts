import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guage',
  template: `
    <mwl-gauge
      [max]="250000"
      [dialStartAngle]="-90"
      [dialEndAngle]="-90.001"
      [value]="190000"
      [animated]="true"
      [animationDuration]="1">
    </mwl-gauge>
  `,
  styleUrls: ['./guage.component.css']
})
export class GuageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
