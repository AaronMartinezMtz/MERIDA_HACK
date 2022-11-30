import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-estadisticas-lideres',
  templateUrl: './estadisticas-lideres.component.html',
  styleUrls: ['./estadisticas-lideres.component.css']
})
export class EstadisticasLideresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  pieChartData1: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ ''], [ 'No exitosas' ]],
    datasets: [ {
      data: [ 50, 11]
    } ]
  };

   pieChartType1: ChartType = 'pie';

   private _pieChartOptions1: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };
  public get pieChartOptions1(): ChartConfiguration['options'] {
    return this._pieChartOptions1;
  }
  public set pieChartOptions1(value: ChartConfiguration['options']) {
    this._pieChartOptions1 = value;
  }


  barChartType1: ChartType = 'bar';


  public barChartData1: ChartData<'bar'> = {
    labels: [ 'Numero de integrantes por lideres' ],
    datasets: [
      { data: [ 334 ], label: 'Josue Martinez' },
      { data: [ 156 ], label: 'Marina Olivas' },
      { data: [ 34 ], label: 'Octavio Ramirez' },
      { data: [ 75 ], label: 'Fernando Hernandez' },
      { data: [ 43 ], label:  'Carlos Catillo' },
      { data: [ 11 ], label: 'Eder Martinez' },
      { data: [ 135 ], label: 'Alberto Quijano' },
      { data: [ 436 ], label: 'Aaron Martinez' },
      { data: [ 12 ], label: 'Isaac Gutierrez' },
    ]
  };

  public chartClicked1({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered1({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  } 



}
