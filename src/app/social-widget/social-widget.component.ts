import { Social } from './../common/mock/data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-widget',
  templateUrl: './social-widget.component.html',
  styleUrls: ['./social-widget.component.scss']
})
export class SocialWidgetComponent {
  @Input()
  public currentSocial: Social;
}
