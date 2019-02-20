import { attractions, IData } from './../common/mock/data';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-attractions-widget',
  templateUrl: './attractions-widget.component.html',
  styleUrls: ['./attractions-widget.component.scss']
})
export class AttractionsWidgetComponent implements OnInit {
  @Output()
  public attrSelected = new EventEmitter();

  public selectedAttr: IData;
  public currentType = '';

  public attractions: IData[];

  ngOnInit() {
    this.attractions = attractions;
    this.selectAttr(attractions[0]);
  }

  public selectAttr(attr: IData): void {
    if (this.selectedAttr === attr) {
      return;
    }
    this.selectedAttr = attr;
    this.attrSelected.emit(attr);
  }

  public setType(type: string): void {
    if (this.currentType === type) {
      return;
    }
    const attr: IData[] = attractions.filter((v: IData) => v.type === type);
    this.selectAttr(attr[0]);
  }
}
