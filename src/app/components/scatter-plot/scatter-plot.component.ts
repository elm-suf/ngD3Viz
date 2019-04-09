import {Component, OnInit} from '@angular/core';
import {DATASET, Entry} from './dataset';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.css']
})
export class ScatterPlotComponent implements OnInit {
  private dataset: Entry[];
  private svg: any;
  private width: number;
  private height: number;
  private margin: number;
  private w: number;
  private h: number;
  private xScale: any;
  private yScale: any;


  constructor() {
  }

  ngOnInit() {
    this.margin = 48;
    this.width = 880;
    this.height = 640;

    this.w = this.width - (this.margin * 2);
    this.h = this.height - (this.margin * 2);

    this.dataset = DATASET;

    this.svg = d3.select('svg').append('svg')
      .attr('width', this.width)
      .attr('height', this.height);


    const xMin = d3.min(this.dataset, d => d.year);
    const xMax = d3.max(this.dataset, d => d.year);

    const yMin = d3.min(this.dataset, d => d.seconds - 20);
    const yMax = d3.max(this.dataset, d => d.seconds + 20);

    this.xScale = d3.scaleTime().domain([xMin, xMax]).range([0, this.w]);

    this.yScale = d3.scaleLinear().domain([yMin, yMax]).range([0, this.h]);

    console.log('YYscaleMax', this.yScale(0), this.yScale(yMax));
    console.log('ymin', yMin, yMax);

    this.svg.append('g')
      .call(d3.axisBottom().scale(this.xScale).ticks(xMax.getFullYear() - xMin.getFullYear()))
      .attr('transform', 'translate(' + this.margin + ',' + (this.h + this.margin) + ')');

    this.svg.append('g')
      .call(d3.axisLeft().scale(this.yScale))
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');


    // this.svg
    //   .selectAll('circle')
    //   .data(this.dataset)
    //   .enter()
    //   .append('circle')
    //   .attr('cx', d => xScale(d.year))
    //   .attr('cy', d => yScale(d.seconds))
    //   .attr('r', d => 8)
    //   .attr('class', 'dot')
    //   .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');


  }

  mouseOverItem(item) {
    if (!item.lineH) {
      console.log('inside');
      const lineH = this.svg.append('line')
        .attr('x1', this.xScale(item.year)).attr('y1', this.yScale(item.seconds))
        .attr('x2', 0).attr('y2', this.yScale(item.seconds))
        .attr('stroke', 'deeppink').attr('stroke-width', 2)
        .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')')
        .style('stroke-dasharray', ('6, 3'));

      const lineV = this.svg.append('line')
        .attr('x1', this.xScale(item.year)).attr('y1', this.yScale(item.seconds))
        .attr('x2', this.xScale(item.year)).attr('y2', this.h)
        .attr('stroke', 'deeppink').attr('stroke-width', 2)
        .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')')
        .style('stroke-dasharray', ('6, 3'));

      item.lineH = lineH;
      item.lineV = lineV;
    }

    this.show(item.lineH, item.lineV);
  }

  private show(lineH: any, lineV) {
    lineH.style('display', 'block');
    lineV.style('display', 'block');
  }

  private hideLine(lineH: any, lineV) {
    lineH.style('display', 'none');
    lineV.style('display', 'none');
  }
}
