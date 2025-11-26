import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { GifService } from '../../services/gif.service';
import { map } from 'rxjs';
import { GifListComponent } from '../../components/gif-list.component/gif-list.component';

@Component({
  selector: 'app-gif-history.component',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
  styleUrl: './gif-history.component.css',
})
export class GifHistoryComponent {
  gifService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });
}
