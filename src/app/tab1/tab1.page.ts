import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  cardItems: any[];
  skeletonItems = Array(2).fill({});

  constructor() {}

  ngOnInit() {
    this.cardItems = Array(6).fill({});
  }

  addItem() {
    this.cardItems.push({});
  }
}
