import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as d3 from 'd3';

interface Item {
  line?: any;
  date: Date;
  GDP: number;
  x: number;
  y: number;
  height: number;
  width: number;
}


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit, AfterViewInit {
  private x: number;
  private y: number;
  private h: number;
  private w: number;
  private data: Array<Item>;
  private svg;
  // private data: Observable<Item[]>;
  private barwidth: number;

  private url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
  private xScale: any;
  private yScale: any;
  private height: number;
  private width: number;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.x = 0;
    this.y = 0;
    this.h = 640;
    this.w = 880;
    this.height = 700;
    this.width = 940;

    this.svg = d3.select('svg');
  }


  ngAfterViewInit() {
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
      .then(r => r.json())
      .then(j => {
        this.data = j.data;
        this.barwidth = this.w / this.data.length;

        this.data = this.data.map((elem, i) => {
          return {
            date: new Date(elem[0].toString()),
            GDP: elem[1],
            x: i * this.barwidth,
            y: 0,
            height: 0,
            width: 0,
          };
        });

        this.xScale = d3.scaleTime()
          .domain([new Date(j.from_date), new Date(j.to_date)])
          .range([0, this.w]);

        const maxGdp = d3.max(this.data, (elem) => elem.GDP);
        this.yScale = d3.scaleLinear()
          .domain([0, maxGdp])
          .range([0, this.h]);

        const xAxis = d3.axisBottom().scale(this.xScale);
        const yAxis = d3.axisLeft().scale(this.yScale);


        this.svg.append('g').call(xAxis).attr('transform', 'translate(24, 664)');
        this.svg.append('g').call(yAxis).attr('transform', 'translate(24, 24)');


        this.data.forEach(e => {
          e.height = this.yScale(e.GDP);
          e.width = this.barwidth;
          e.y = this.h - this.yScale(e.GDP);
        });


      });
  }

  itemClick(item: Item) {
    console.log(item);
  }

  mouseOverItem(item: Item) {
    if (!item.line) {
      console.log('inside');
      const line = this.svg.append('line')
        .attr('x1', item.x).attr('y1', item.y)
        .attr('x2', 0).attr('y2', item.y)
        .attr('stroke', 'deeppink').attr('stroke-width', 2)
        .attr('transform', 'translate(24, 24)')
        .style('stroke-dasharray', ('6, 3'));

      item.line = line;
    }

    this.show(item.line);
  }

  private show(line: any) {
    line.style('display', 'block');
  }

  private hide(line: any) {
    line.style('display', 'none');
  }
}
