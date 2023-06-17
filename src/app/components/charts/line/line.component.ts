import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      autoSize: true,

      data: [
        {
          days: 'Mon',
          visitors: 35,
        },
        {
          days: 'Tue',
          visitors: 40,
        },
        {
          days: 'Wed',
          visitors: 30,
        },
        {
          days: 'Thur',
          visitors: 44,
        },
        {
          days: 'Fri',
          visitors: 20,
        },
        {
          days: 'Sat',
          visitors: 44,
        },
        {
          days: 'Sun',
          visitors: 45,
        },
      ],
      series: [
        {
          xKey: 'days',
          yKey: 'visitors',
          fill: '#00CC99',
          stroke: '#003366',
          marker: {
            enabled: false,
          },
          label: {
            enabled: false,
          },
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          // visible: true,
        },
        {
          type: 'number',
          position: 'left',
          min: 0,
        },
      ],
    };
  }
}
