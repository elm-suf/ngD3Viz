import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TemperatureData} from '../models/TemperatureData';


@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  // protected MY_URL: ;

  constructor(private http: HttpClient) {
  }


  getTemData() {
    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';
    return this.http.get<TemperatureData>(url);

  }
}
