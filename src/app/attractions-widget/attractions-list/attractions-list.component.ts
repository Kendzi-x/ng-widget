import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IData } from 'src/app/common/mock/data';

@Component({
  selector: 'app-attractions-list',
  templateUrl: './attractions-list.component.html',
  styleUrls: ['./attractions-list.component.scss']
})
export class AttractionsListComponent {

  @Input()
  public currentType = '';

  @Input()
  public attractions: IData[];

  @Output()
  public attrSelected = new EventEmitter();

  public selectAttr(attr: IData): void {
    this.attrSelected.emit(attr);
  }
}
