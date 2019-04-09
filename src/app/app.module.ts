import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BarchartComponent} from './components/barchart/barchart.component';
import {HttpClientModule} from '@angular/common/http';
import {TestComponent} from './components/test/test.component';
import {ScatterPlotComponent} from './components/scatter-plot/scatter-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    TestComponent,
    ScatterPlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
