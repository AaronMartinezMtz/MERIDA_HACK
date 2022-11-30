import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  pieChartData1: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Exitosas'], [ 'No exitosas' ]],
    datasets: [ {
      data: [ 50, 11]
    } ]
  };

   pieChartType1: ChartType = 'pie';

   public pieChartOptions1: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };


  barChartType1: ChartType = 'bar';


  public barChartData1: ChartData<'bar'> = {
    labels: [ 'Nuevas instalaciones durate el 2023' ],
    datasets: [
      { data: [ 6 ], label: 'Ciudad de Mexico' },
      { data: [ 10 ], label: 'Los cabos' },
      { data: [ 10 ], label: 'Baja Califoria' },
      { data: [ 13 ], label: 'Acapulco' },
      { data: [ 5 ], label:  'Jalisco' },
      { data: [ 8 ], label: 'Colima' },
      { data: [ 2 ], label: 'Francia' },
      { data: [ 4 ], label: 'España' },
      { data: [ 3 ], label: 'Amsterdam' },
    ]
  };

  public chartClicked1({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered1({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  } 










  barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ 'Artesanos por' ],
    datasets: [
      { data: [ 526 ], label: 'Hamacas' },
      { data: [ 100 ], label: 'Sarape' },
      { data: [ 340 ], label: 'Mosquitero' },
      { data: [ 451 ], label: 'Sillas hamacas' },
      { data: [ 70 ], label: 'Sombrilla Cielo' },
      { data: [ 350 ], label: 'Decoración' },
    ]
  };



   pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Hamacas'], [ 'Sarape' ], ['Mosquitero'], ['Mosquitero'], ['Sillas hamacas'], ['Sombrillas Cielo'], ['Decoracion']],
    datasets: [ {
      data: [ 50, 30, 20, 50, 30, 20 ,10 ]
    } ]
  };

   pieChartType: ChartType = 'pie';

   public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };



  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  } 

}
