import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { Gif } from '../interfaces/gif.interface';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  trendingGifs = signal<Gif[]>([]);
  trendinGifsLoading = signal(true);


  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed( ()=> Object.keys(this.searchHistory()));

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

  //Search Gifs request: Este metodo devuelve un Observable<GiphyResponse>
  searchGifs(query: string) {
   return this.http
    .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        q: query,
        limit: 20,
      },
    }).
    //Los operadores del pipe de RxJS nos permiten transformar la respuesta del Observable
    pipe(
      map(({data})=> data),
      map((items)=> GifMapper.mapGiphyItemsToGifArray(items)),

      //Operador tap nos permite ejecutar efectos secundarios sin alterar los datos que fluyen a traves del Observable
      tap( (items) => {
        this.searchHistory.update( (history) => ({
          ...history,
           [query.toLocaleLowerCase()]: items,
        }));
      })
    );
  }

  getHistoryGifs(query: string): Gif[]{
    return this.searchHistory()[query] ?? [];
  }
}
