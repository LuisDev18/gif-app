import { Component, input } from '@angular/core';
import { GifListItemComponent } from '../gif-list.component/gif-list-item.component/gif-list-item.component'
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  standalone: true,
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
})
export class GifListComponent { 
  gifs = input.required<Gif[]>();
}
