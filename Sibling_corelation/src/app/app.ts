import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiblingA } from './sibling-a/sibling-a';
import { SiblingB } from './sibling-b/sibling-b';
import { SiblingC } from './sibling-c/sibling-c';
import { SiblingD } from './sibling-d/sibling-d';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiblingA, SiblingB, SiblingC, SiblingD],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Sibling_corelation');
}
