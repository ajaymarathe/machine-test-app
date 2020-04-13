import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { ChartServiceService } from '../chart-service.service';
import * as Highchart from 'highcharts';


const Highcharts = require('highcharts');
@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})

export class HighchartsComponent implements OnInit {
  @Input() chart: string;
  @Output() setChart = new EventEmitter<any>();
  chartOptions: any

  constructor(private chartService: ChartServiceService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.chart) {
      this.chartOptions = this.chartService.getChartObject(this.chart);
      this.chartOptions.series = [];
      this.setChart.emit(this.create(this.chartOptions))
    }
  }

  create(options) {
    return Highcharts.chart('chart_', options);
  }
}
