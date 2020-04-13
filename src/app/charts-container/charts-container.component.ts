import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataConverterService } from '../data-converter.service';

@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.css']
})

export class ChartsContainerComponent implements OnInit {
  charts = [];
  datasets = []
  indexxx: number = 0;
  selectedWidget: any;
  selectedChart: string;
  cardJson = [];
  dropDataset: string;

  constructor(private httpService: HttpClient, public dataService: DataConverterService) { }

  ngOnInit() {
    this.charts = ['column', 'donut', 'card'];
    this.datasets = ['Expenditure', 'Income'];
    this.dataService.getJsonData();
  }

  onSelectChart(chart, i) {
    this.dropDataset = '';
    this.selectedChart = chart;
  }

  onAddDataset(event) {
    this.dropDataset = '';
    this.dropDataset = event.dragData;
    this.setHighchartData(this.dataService.getDataset(event.dragData))
  }

  onSetChart(evt) {
    if (evt) {
      this.selectedWidget = evt;
    }
  }

  setHighchartData(highchart_data) {
    if (this.selectedChart) {
      let chart :string = '';
      if (this.selectedWidget) {
        this.selectedWidget.options.chart.type = this.selectedChart === 'card' ? 'card' : this.selectedWidget.options.chart.type;
        chart = this.selectedWidget.options.chart.type;
      } else {
        chart = this.selectedChart;
      }
      switch (chart) {
        case 'column': {
          this.setColumnChartData(highchart_data)
          break;
        }
        case 'pie': {
          this.setPieChartData(highchart_data)
          break;
        }
        case 'card': {
          this.setCardChartData(highchart_data)
          break;
        }
      }
    }
  }

  setColumnChartData(highchart_data) {
    this.selectedWidget = this.removeSeries(this.selectedWidget);
    this.selectedWidget.xAxis[0].update({
      categories: highchart_data.categories,
      labels: {
        enabled: true
      }
    });
    this.selectedWidget.addSeries({ name: this.dropDataset , data: highchart_data.data }, true, true);
  }

  setPieChartData(highchart_data) {
    this.selectedWidget.options.chart.type = 'pie'
    this.selectedWidget = this.removeSeries(this.selectedWidget);
    this.selectedWidget.xAxis[0].update({
      categories: highchart_data.categories,
      labels: {
        enabled: true
      }
    });
    let series = [];
    highchart_data.categories.forEach((d, idx) => {
      let obj = { name: d, y: highchart_data.data[idx] }
      series.push(obj);
    });
    this.selectedWidget.addSeries({ name: this.dropDataset , data: series, innerSize: 75, colorByPoint: true, }, true, true);
  }

  removeSeries(selectedWidget) {
    if (selectedWidget.series.length > 0) {
      for (let i = selectedWidget.series.length - 1; i >= 0; i--) {
        selectedWidget.series[i].remove(true);
      }
    }
    return selectedWidget;
  }

  setCardChartData(highchart_data) {
    this.cardJson = [];
    highchart_data.categories.forEach((i, idx) => {
      let obj = { name: i, count: highchart_data.data[idx] };
      this.cardJson.push(obj)
    })
  }
}
