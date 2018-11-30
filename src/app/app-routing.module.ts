import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { AtualizarComponent } from './pages/atualizar/atualizar.component';
import { RemoverComponent } from './pages/remover/remover.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'adicionar', pathMatch: 'full' },

    { path: 'adicionar', component: AdicionarComponent },
    { path: 'atualizar', component: AtualizarComponent },
    { path: 'remover', component: RemoverComponent },
    { path: 'visualizar', component: VisualizarComponent },
    


];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
