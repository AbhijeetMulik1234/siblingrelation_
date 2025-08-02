import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyComplexObject } from '../Model/Object';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data-service';

@Component({
  selector: 'app-sibling-b',
  imports: [JsonPipe],
  templateUrl: './sibling-b.html',
  styleUrl: './sibling-b.css',
})
export class SiblingB implements OnInit, OnDestroy {
  currentObject: MyComplexObject | null = null;
  private sub!: Subscription;

  constructor(private sharedData: SharedDataService) {}

  ngOnInit() {
    // Subscribe to updates from service
    this.sub = this.sharedData.object$.subscribe((obj) => {
      this.currentObject = obj;
    });
  }
  changeObject() {
    const updated: MyComplexObject = {
      id: 2,
      name: 'updated by Siblings B',
      details: {
        description: 'Changed from Sibling B',
        tags: ['angular', 'service', 'sibling-b'],
      },
    };
    this.sharedData.updateObject(updated); //publish update
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
