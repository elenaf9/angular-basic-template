import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.scss']
})
export class ActivityBarComponent implements OnInit {

  constructor() { }

  @Input() direction: 'row' | 'col' = 'col';
  @Input() activityList: {[name: string]: {label: string, icon: string}} = {};
  @Output() activityClicked: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }

  onClick(name: string) {
    this.activityClicked.emit(name);
  }

}
