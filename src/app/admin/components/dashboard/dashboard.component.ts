import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  	page_title  = "dashboard";
	bread_crumbs: BreadCrumbs[] = [
		{
			title: "home",
			link: "/admin"
		},
		{
			title: "Dashboard",
			link: "/admin/dashboard"
		}
	];

	dashboardCards = [
		{
			title: "active tours",
			icon: "tour",
			value: 2345,
			link: "/"
		},
		{
			title: "active tours",
			icon: "tour",
			value: 2345,
			link: "/"
		},
		{
			title: "active tours",
			icon: "tour",
			value: 2345,
			link: "/"
		},
		{
			title: "active tours",
			icon: "tour",
			value: 2345,
			link: "/"
		},
	];

	public lineChartData: ChartDataSets[] = [
		{
			data: [65, 59, 80, 81, 56, 55, 40,20,15,5,70,95],
			label: 'Tours'
		},
		{
			data: [10, 30, 45, 71, 76, 80, 50,60,20,50,45,80],
			label: 'Tour Bookings'
		},
	];
	public lineChartLabels: Label[] = [
		'January', 'February', 'March', 'April', 'May', 'June', 'July','August',
		'September','October','November','December'
	];
	public lineChartOptions: (ChartOptions & { annotation: any }) = {
		responsive: true,
		scales: {
			// We use this empty structure as a placeholder for dynamic theming.
			xAxes: [{}],
			yAxes: [
			{
				id: 'y-axis-0',
				position: 'left',
			},
			{
				id: 'y-axis-1',
				position: 'right',
				gridLines: {
				color: 'rgba(255,0,0,0.3)',
				},
				ticks: {
				fontColor: 'red',
				}
			}
			]
		},
		annotation: {
			annotations: [
				{
					type: 'line',
					mode: 'vertical',
					scaleID: 'x-axis-0',
					value: 'March',
					borderColor: 'orange',
					borderWidth: 2,
					label: {
					enabled: true,
					fontColor: 'orange',
					content: 'LineAnno'
					}
				},
			],
		},
	};


	public lineChartColors: Color[] = [
		{ // grey
		  backgroundColor: 'rgba(148,159,177,0.2)',
		  borderColor: 'rgba(148,159,177,1)',
		  pointBackgroundColor: 'rgba(148,159,177,1)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
	];
	
	public lineChartLegend = true;
	public lineChartType = 'line';
	public lineChartPlugins = [pluginAnnotations];

	constructor() { }

	ngOnInit(): void {
	}

}
