import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  trendingGifs = signal<Gif[]>([]);
  trendinGifsLoading = signal(true);

  constructor(private http: HttpClient) {
    console.log('servicio creado');
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendinGifsLoading.set(false);
        console.log({ gifs });
      });
  }

  //Search Gifs request 
  searchGifs(query: string) {
    this.http
    .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        q: query,
        limit: 20,
      },
    })
    .subscribe((resp)=>{
      console.log({resp});
    });
      }
}
