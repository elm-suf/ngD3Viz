import {Component, OnInit} from '@angular/core';
import {TemperatureService} from '../../services/temperature.service';
import {Observable} from 'rxjs';
import {TemperatureData} from '../../models/TemperatureData';


@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {

  myData$: Observable<TemperatureData>;
  myTempdata: TemperatureData;

  constructor(private dataSvc: TemperatureService) {
  }

  ngOnInit() {
    this.myData$ = this.dataSvc.getTemData();

    this.myData$.subscribe((res) => {
      console.log('data', res);
      this.myTempdata = res;
    });
  }

}
