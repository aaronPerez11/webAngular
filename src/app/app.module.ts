import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//services
import { MapService } from "./services/map.service";

//rutas
import { APP_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';

//pages
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from "@angular/common/http";
import { CoordsComponent } from './components/coords/coords.component';
import { ConfigComponent } from './components/config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NavbarComponent,
    CoordsComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
