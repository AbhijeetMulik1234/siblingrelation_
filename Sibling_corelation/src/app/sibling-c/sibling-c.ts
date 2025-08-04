import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyComplexObject } from '../Model/Object';
import { SharedDataService } from '../shared-data-service';
import { Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sibling-c',
  imports: [JsonPipe],
  templateUrl: './sibling-c.html',
  styleUrl: './sibling-c.css',
})
export class SiblingC implements OnInit, OnDestroy {
  currentObject: MyComplexObject | null = null;
  private sub!: Subscription;

  constructor(private sharedData: SharedDataService) {
    console.log('Step 1: inside constructor SiblingC');
  }

  ngOnInit() {
    // Subscribe to shared object updates
    console.log('Step 2: inside OnInit SiblingC');
    this.sub = this.sharedData.object$.subscribe((SubscribeObject) => {
      this.currentObject = SubscribeObject;
      console.log(this.currentObject);
      console.log('Step 3: inside subscribe SiblingC');
    });
  }

  changeObject() {
    const updated: MyComplexObject = {
      id: 1,
      name: 'Updated by Sibling C',
      details: {
        description: 'Changed from Sibling C',
        tags: ['angular', 'service', 'sibling-a'],
      },
    };
    console.log('Step 1: inside changeObject SiblingC');
    this.sharedData.updateObject(updated); // Publish update
    console.log('Step 5: inside changeObject SiblingC');
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); // Prevent memory leaks
    console.log('Step 6: inside ngOnDestroy SiblingC');
  }
}
