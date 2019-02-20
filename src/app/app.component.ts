import { Component } from '@angular/core';
import { IData, Social, Weather } from './common/mock/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'my-widgets';

  public selectedSocial: Social;
  public selectedWeather: Weather;

  public attrSelected(attr: IData) {
    this.selectedSocial = attr.social;
    this.selectedWeather = attr.weather;
    // console.log(attr);
  }
}
