import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SettingsComponent } from './componentes/settings/settings.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TravelService } from './services/travel.service';
import { MensagensService } from './services/mensagens.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    MenuComponent,
    AdicionarComponent,
    VisualizarComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TravelService, MensagensService, ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
