import { Component, Input, OnInit } from '@angular/core';
import 'chartjs-plugin-doughnutlabel';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit  {

  @Input() text;
  @Input() level;
  @Input() data;

  chartData = this.data;
  chartType = 'doughnut';
  legend = false;
  colors = [{
    backgroundColor: ['#009688', '#B0BEC5'],
    borderColor: ['#009688', '#B0BEC5'],
    borderWidth: 0
  }];
  options = {
    tooltips: {enabled: false},
    hover: {mode: null},
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 0
      }
    },
    title: {
      display: true,
      position: 'bottom',
      fontSize: 12,
      text: '',
      fontColor: '#ECF0F1',
      fontStyle: 'larger',
      padding: 10
    },
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: this.level,
            font: {
              size: '10',
              units: 'em',
              family: 'Arial, Helvetica, sans-serif',
              style: 'normal',
              weight: 'normal'
            },
            color: '#ECF0F1',
          }
        ]
      }
    }

  };

  constructor() {
     console.log(this.text);
  }

  ngOnInit() {
    this.options.title.text = this.text;
    this.options.plugins.doughnutlabel.labels[0].text = this.level;
    this.chartData = this.data;
  }
}
