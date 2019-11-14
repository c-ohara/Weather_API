import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DCComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';


const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home"},
  { path: 'home', component: HomeComponent},
  { path: 'seattle', component: SeattleComponent},
  { path: 'sanjose', component: SanJoseComponent},
  { path: 'burbank', component: BurbankComponent},
  { path: 'dallas', component: DallasComponent},
  { path: 'dc', component: DCComponent},
  { path: 'chicago', component: ChicagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
