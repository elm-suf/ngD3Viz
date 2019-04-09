import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import * as d3 from 'd3';
import {shuffle} from 'd3';
import {ChartDatasetsService} from '../../services/chart-datasets.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {
  dataset: any;
  svg: any;
  dataFromService: any[];


  constructor(private http: HttpClient, private serv: ChartDatasetsService) {
  }

  ngOnInit() {
    this.dataset = [[32, 32], [88, 88], [160, 132], [132, 322], [432, 332]];
    this.svg = d3.select('svg');


  }

  ngAfterViewInit(): void {
    console.log(this.dataFromService);
  }

  itemClicked(item) {
    console.log(item);
    this.dataset = shuffle(this.dataset);
  }

  lineGenerator() {
    const line = d3.line().x(d => d[0]).y(d => d[1]);

    return line(this.dataset);
  }
}
