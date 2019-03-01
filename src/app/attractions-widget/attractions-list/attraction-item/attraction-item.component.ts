import { Component, OnInit, Input } from '@angular/core';
import { IData } from 'src/app/common/mock/data';

@Component({
  selector: 'app-attraction-item',
  templateUrl: './attraction-item.component.html',
  styleUrls: ['./attraction-item.component.scss']
})
export class AttractionItemComponent {
  @Input()
  public attr: IData;
}
