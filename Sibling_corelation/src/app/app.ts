import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiblingA } from './sibling-a/sibling-a';
import { SiblingB } from './sibling-b/sibling-b';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiblingA, SiblingB],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Sibling_corelation');
}
