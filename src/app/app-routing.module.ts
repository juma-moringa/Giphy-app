import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyComponent } from './giphy/giphy.component';
import { RandomgifComponent } from './randomgif/randomgif.component';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
  {path: '', component: TrendsComponent},
  {path: 'randomgif', component: RandomgifComponent},
  {path: 'search', component: GiphyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
