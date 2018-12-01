import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'adicionar', pathMatch: 'full' },

    { path: 'adicionar', component: AdicionarComponent },
    { path: 'visualizar', component: VisualizarComponent }   
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
