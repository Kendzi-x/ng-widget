import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttractionsWidgetComponent } from './attractions-widget/attractions-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { SocialWidgetComponent } from './social-widget/social-widget.component';
import { UniquetypePipe } from './common/pipes/uniquetype.pipe';
import { FilterTypePipe } from './common/pipes/filter-type.pipe';
import { AttractionsListComponent } from './attractions-widget/attractions-list/attractions-list.component';
import { AttractionItemComponent } from './attractions-widget/attractions-list/attraction-item/attraction-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AttractionsWidgetComponent,
    WeatherWidgetComponent,
    SocialWidgetComponent,
    UniquetypePipe,
    FilterTypePipe,
    AttractionsListComponent,
    AttractionItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
