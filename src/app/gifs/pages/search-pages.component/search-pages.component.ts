import { Component, inject, signal } from '@angular/core';
import {GifListComponent} from "../../components/gif-list.component/gif-list.component";
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-pages.component',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './search-pages.component.html',
  styleUrl: './search-pages.component.css',
})
export class SearchPagesComponent { 

  searchGifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string){
    this.searchGifService.searchGifs(query);
    console.log({query});
  }
}
