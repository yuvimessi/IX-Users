import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexNonAxisChartSeries, ApexChart, ApexResponsive } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-apex-report',
  templateUrl: './apex-report.component.html',
  styleUrls: ['./apex-report.component.css']
})
export class ApexReportComponent implements OnInit {


  @ViewChild("chart") chart: ChartComponent;

  public chartOptions: Partial<ChartOptions>;

  
  ngOnInit(): void {
  }


  constructor() {

    this.chartOptions = {
      series: [531976.44, 1096227.76, 847799.42, 472287.52],

      chart: {
        type: "donut"
      },

      labels: ["Bund Garden", "Ganesh Khind", "Lulla Nagar", "Udaipur"],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
   }
}








