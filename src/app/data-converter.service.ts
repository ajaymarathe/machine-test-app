import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataConverterService {
  datasets: any;
  datasetFactory: any;

  constructor(private httpService: HttpClient) { }

  getJsonData() {
    this.httpService.get('assets/datasets.json').subscribe(
      data => {
        this.datasetFactory = data;
      })  
    return this.datasetFactory
  }

  getDataset(dataset) {
    let highchart_data = { categories: [], data: [] }
    this.datasetFactory.forEach(i => {
      if (i.display_name === dataset) {
        switch (i.display_name) {
          case 'Expenditure': {
            this.onConvertExpenditure(highchart_data, i)
            break;
          }
          case 'Income': {
            this.onConvertIncomejson(highchart_data, i)
            break;
          }
        }
      }
    })

    return highchart_data
  }

  onConvertExpenditure(highchart_data, data) {
    let newArr = []
    highchart_data.categories = Object.keys(data.datasets[0]);
    data.datasets.forEach(d => {
      let keys = Object.keys(d)
      keys.forEach((h, idx) => {
        if (h === highchart_data.categories[idx]) {
          let obj = { [h]: d[h] }
          if (newArr.length != keys.length) {
            newArr.push(obj);

          } else {
            let sum = (newArr[idx][h] + d[h]);
            newArr[idx] = { [highchart_data.categories[idx]]: sum }
          }
        }
      })
    })
    newArr.forEach((n, idx) => {
      highchart_data.data.push(n[highchart_data.categories[idx]])
    })
    return highchart_data;
  }

  onConvertIncomejson(highchart_data, data) {
    data.datasets.forEach(i => {
      highchart_data.categories.push(i.locality);
      highchart_data.data.push(i.income)
      return highchart_data;
    })
  }
}
