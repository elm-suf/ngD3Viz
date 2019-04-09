import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarchartComponent} from './components/barchart/barchart.component';
import {TestComponent} from './components/test/test.component';
import {ScatterPlotComponent} from './components/scatter-plot/scatter-plot.component';

const routes: Routes = [
  {path: 'barchart', component: BarchartComponent},
  {path: 'test', component: TestComponent},
  {path: 'scatter-plot', component: ScatterPlotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
