import { Injectable } from '@angular/core';

@Injectable()
export class ChartServiceService {

column = {
    chart: {
      type: 'column',
      width: 580,
      height: 320,
    },
    title: {
      text: 'Chart title',
      useHTML: true,
      style: {
        textOverflow: 'ellipsis',
      }
    },
    subtitle: {
      text: 'Chart subtitle',
      style: {
        textOverflow: 'ellipsis',
      }
    },
    lang: {
      noData: '',
    },
    legend: {
      enabled: true,
      title: {
        text: ''
      }
    },
    xAxis: {
      categories: [''],
      title: {
        text: ''
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {},
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [''],

  }

  donut = {
    chart: {
      type: 'pie',
      width: 580,
      height: 320,
    },
    title: {
      text: 'Chart title',
      useHTML: true,
      style: {
        textOverflow: 'ellipsis',
      }
    },
    subtitle: {
      text: 'Chart subtitle',
      style: {
        textOverflow: 'ellipsis',
      }
    },
    lang: {
      noData: '',
    },
    legend: {
      enabled: true,
      title: {
        text: ''
      }
    },
    xAxis: {
      categories: [''],
      title: {
        text: ''
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {},
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [''],

  }

  constructor() {

    console.log(this.column)
   }

  getChartObject(chartType){
    let chartOptions = {}
    switch (chartType) {
      case 'column': {
       chartOptions = this.getColumnChartObj();
        break;
      }
      case 'donut': {
        chartOptions = this.getDonutChartObject();
        break;
      }
  }
  console.log(chartOptions)
  return chartOptions;

}

getColumnChartObj(){
  return this.column;
}

getDonutChartObject(){
  return this.donut;
}
}