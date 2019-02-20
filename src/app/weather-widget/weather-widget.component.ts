import { Weather } from './../common/mock/data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent {
  @Input()
  public currentWeather: Weather;
}
