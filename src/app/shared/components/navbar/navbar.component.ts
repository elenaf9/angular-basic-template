import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  @Input() style: 'header' | 'side' = 'header';
  @Input() navList: {label: string, path: string}[] = [];
  @Input() color: 'default' | string = 'default';

  @Output() linkClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
