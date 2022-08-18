import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/AutoInsurance', pathMatch: 'full' },
  { path: 'https://sahar-tech.github.io/', redirectTo: '/home/AutoInsurance', pathMatch: 'full' },
  { path: 'https://sahar-tech.github.io/web-sahar-aggab.dz/', redirectTo: '/home/AutoInsurance', pathMatch: 'full' },
  { path: 'https://sahar-tech.github.io/web-sahar-aggab.dz/website-shr-agg.dz/', redirectTo: '/home/AutoInsurance', pathMatch: 'full' },
  { path: 'https://sahar-tech.github.io/web-sahar-aggab.dz', component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
