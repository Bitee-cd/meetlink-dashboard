import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { getData } from './data';

@Component({
  selector: 'app-doughut',
  templateUrl: './doughut.component.html',
  styleUrls: ['./doughut.component.css'],
})
export class DoughutComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      data,
      series: [
        {
          type: 'pie',
          angleKey: 'count',
          fills: ['#00CC99', '#003366'],
          strokeWidth: 0,
          innerRadiusOffset: -28,
          innerLabels: [
            {
              text: percentage(data[0].count),
              color: '#35ab7c',
              fontSize: 28,
            },
            {
              text: 'INVITED',
              fontSize: 14,
              margin: 4,
            },
          ],
          innerCircle: {
            fill: '#fffff',
          },
        },
      ],
    };
  }
}

const data = getData();
const total = data.reduce((sum, d) => sum + d.count, 0);
const percentage = (value: number) => `${((value / total) * 100).toFixed()}%`;
