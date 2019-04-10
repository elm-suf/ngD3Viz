import {Component, ElementRef, OnInit} from '@angular/core';
import {TemperatureService} from '../../services/temperature.service';
import {Observable} from 'rxjs';
import {Entry, TemperatureData} from '../../models/TemperatureData';
import {D3, D3Service, Selection} from 'd3-ng2-service';


@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {

  myData$: Observable<TemperatureData>;
  myTempdata: Array<Entry>;


  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  private height: number;
  private width: number;

  constructor(element: ElementRef,
              d3Service: D3Service,
              private dataSvc: TemperatureService) {

    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
    this.width = 1920;
    this.height = 640;
  }

  ngOnInit() {
    this.myData$ = this.dataSvc.getTemData();

    this.myData$.subscribe((res) => {
      console.log('data', res);
      this.myTempdata = res.monthlyVariance;


      this.drawD3Stuff();
    });

  }

  private drawD3Stuff() {
    const w = this.width - 64;
    const d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>;

    if (this.parentNativeElement !== null) {
      console.log('inside');


      d3ParentElement = d3.select(this.parentNativeElement);

      const svg = d3ParentElement.select<SVGSVGElement>('svg');
      const tooltip = d3ParentElement
        .select<HTMLDivElement>('#tooltip')
        .text('This is a tooltip');

      // let's make axis

      const minYear = d3.min(this.myTempdata, elem => new Date(elem.year, 0));
      const maxYear = d3.max(this.myTempdata, elem => new Date(elem.year + 1, 0));
      console.log('minDate', minYear.getFullYear());
      console.log('maxDate', maxYear.getFullYear());
      const xScale = d3.scaleTime().domain([minYear, maxYear]).range([32, this.width - 32]);
      const xAxis = d3.axisBottom(xScale).ticks(20);

      svg.append<SVGGElement>('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + (this.height - 32) + ')')
        .call(xAxis);

      const month = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];
      const yScale = d3.scaleBand().domain(month).range([32, this.height - 32]);
      const yAxis = d3.axisLeft(yScale);

      svg.append<SVGGElement>('g')
        .attr('class', 'axis axis--y')
        .attr('transform', 'translate(' + 32 + ',0)')
        .call(yAxis);


      const minVariance = d3.min(this.myTempdata, elem => elem.variance);
      const maxVariance = d3.max(this.myTempdata, elem => elem.variance);

      const myColor = d3.scaleSequential(d3.interpolateInferno)
        .domain([minVariance, maxVariance]);


      const mySet = new Set(this.myTempdata.map((value) => value.year));
      console.log('mySet', mySet);
      svg.selectAll<SVGRectElement, any>('rect')
        .data(this.myTempdata)
        .enter()
        .append('rect')
        .attr('stroke', d => myColor(d.variance))
        .attr('x', (elem, index) => xScale(new Date(elem.year, 0)))
        .attr('y', (elem, index) => yScale(month[elem.month - 1]))
        .attr('width', w / mySet.size)
        .attr('height', (this.height - 64) / 12)
        .style('fill', d => myColor(d.variance))
        // .on('click', names)
        .on('mouseover', d => {

          console.log('mouse over ' + d);
          tooltip
            .text('Hover over' + d.year)
            .style('visibility', 'visible');
        });

    }
  }

}


