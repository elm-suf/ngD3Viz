import {Component, ElementRef, OnInit} from '@angular/core';
import {DatasetService} from '../../services/choropleth_map/dataset.service';
import {D3, D3Service, Selection} from 'd3-ng2-service';
import {Observable} from 'rxjs';
import {Dataset} from '../../models/Dataset';
import {feature} from 'topojson';

@Component({
  selector: 'app-choropleth-map',
  templateUrl: './choropleth-map.component.html',
  styleUrls: ['./choropleth-map.component.css']
})
export class ChoroplethMapComponent implements OnInit {

  private d3: D3;
  private parentNativeElement: any;
  private height: number;
  private width: number;
  private margin_left: number;
  private margin_right: number;
  private margin_top: number;
  private margin_bottom: number;

  private dataObs$: Observable<Dataset>;
  private dataset: Dataset;


  constructor(element: ElementRef, d3Service: D3Service, private dataSvc: DatasetService) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
    this.width = 1080;
    this.height = 720;

    this.margin_top = 32;
    this.margin_right = 32;
    this.margin_bottom = 32;
    this.margin_left = 32;
  }

  ngOnInit() {
    this.dataObs$ = this.dataSvc.getCountries();

    this.dataObs$.subscribe(res => {
      this.dataset = res;
      this.draw();
    });

  }

  draw(): any {
    console.log('drawing');

    const margin = 32;
    const w = this.width - this.margin_left - this.margin_right;
    const h = this.height - this.margin_top - this.margin_bottom;


    const d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;

    if (this.parentNativeElement !== null) {
      console.log('data', this.dataset);
      const counties = feature(this.dataset, this.dataset.objects.counties).features;
      console.log('counties', counties);
      // const features = feature.features;
      // console.log('features', features);
      d3ParentElement = d3.select(this.parentNativeElement);
      const svg = d3ParentElement.select<SVGSVGElement>('svg');
      const path = d3.geoPath();

      svg.append('g')
        .selectAll('path')
        .data(counties)
        .enter()
        .append('path')
        .attr('d', path);

    }
  }
}
