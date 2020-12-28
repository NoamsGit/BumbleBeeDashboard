import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TempComponent } from './temp/temp.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SaveOldComponent } from './save-old/save-old.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { MapPanelComponent } from './map-panel/map-panel.component';
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';
import { TablePanelComponent } from './table-panel/table-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    HomePageComponent,
    SaveOldComponent,
    InfoPanelComponent,
    MapPanelComponent,
    WeatherPanelComponent,
    TablePanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
