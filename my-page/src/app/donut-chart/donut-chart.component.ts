import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  chartData = [80, 20];
  chartType = 'doughnut';
  legend = false;
  colors = [{
    backgroundColor: ['#009688', '#B0BEC5']
  }];
  options = {
    tooltips: {enabled: false},
    hover: {mode: null},
    responsive: true,
    centerText: {
      display: true,
      text: 'Angular'
    }
  };

  constructor() { }

  ngOnInit() {
  }
}
