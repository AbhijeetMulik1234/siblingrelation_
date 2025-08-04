import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyComplexObject } from '../Model/Object';
import { SharedDataService } from '../shared-data-service';
import { Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sibling-d',
  imports: [JsonPipe],
  templateUrl: './sibling-d.html',
  styleUrl: './sibling-d.css',
})
export class SiblingD implements OnInit, OnDestroy {
  currentObject: MyComplexObject | null = null;
  private sub!: Subscription;

  constructor(private sharedData: SharedDataService) {}

  ngOnInit() {
    // Subscribe to shared object updates
    this.sub = this.sharedData.object$.subscribe((SubscribeObject) => {
      this.currentObject = SubscribeObject;
    });
  }

  changeObject() {
    const updated: MyComplexObject = {
      id: 1,
      name: 'Updated by Sibling A',
      details: {
        description: 'Changed from Sibling A',
        tags: ['angular', 'service', 'sibling-a'],
      },
    };
    this.sharedData.updateObject(updated); // Publish update
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); // Prevent memory leaks
  }
}
