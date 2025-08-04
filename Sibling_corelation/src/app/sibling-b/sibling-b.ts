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

  constructor(private sharedData: SharedDataService) {
    console.log('Step 1: inside constructor SiblingB');
  }

  ngOnInit() {
    console.log('Step 2: inside OnInit SiblingB');
    this.sub = this.sharedData.object$.subscribe((SubscribeObject) => {
      this.currentObject = SubscribeObject;
      console.log(this.currentObject);
      console.log('Step 3: inside subscribe SiblingB');
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
    console.log('Step 1: inside changeObject SiblingB');
    this.sharedData.updateObject(updated); //publish update
    console.log('Step 5: inside changeObject SiblingB');
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log('Step 6: inside ngOnDestroy SiblingB');
  }
}
