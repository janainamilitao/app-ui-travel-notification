import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SettingsComponent } from './componentes/settings/settings.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { AtualizarComponent } from './pages/atualizar/atualizar.component';
import { RemoverComponent } from './pages/remover/remover.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    MenuComponent,
    AdicionarComponent,
    AtualizarComponent,
    RemoverComponent,
    VisualizarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
