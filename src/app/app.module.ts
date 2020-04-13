import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HighchartsChartModule} from 'highcharts-angular';
import {DndModule} from 'ng2-dnd';
import { AppComponent } from './app.component';
import { ChartsContainerComponent } from './charts-container/charts-container.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsComponent } from './highcharts/highcharts.component'; 
import { ChartServiceService } from './chart-service.service';
import { DataConverterService } from './data-converter.service';


@NgModule({
  declarations: [
    AppComponent,
    ChartsContainerComponent,
    HighchartsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HighchartsChartModule,
    DndModule,
    DndModule.forRoot(),

  ],
  providers: [ChartServiceService,DataConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
