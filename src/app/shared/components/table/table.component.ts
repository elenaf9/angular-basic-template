import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() itemsLabel = '';
  @Input() datasetHeader: { key: string, label: string}[] = [];
  @Input() dataSet: {id: string, [key: string]: any}[] = [];

  @Output() detailsClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() editClicked: EventEmitter<string> = new EventEmitter<string>();

  data: any[][] = [[]];

  constructor() { }

  ngOnInit(): void {
  }
}
