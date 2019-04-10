import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dataset} from '../../models/Dataset';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private http: HttpClient) {
  }


  getCountries() {

    return this.http.get<Dataset>('../../assets/choropleth_map/countries.json');
  }
}
