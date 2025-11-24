import { ChangeDetectionStrategy, Component } from '@angular/core';
import {GifListComponent} from "../../components/gif-list.component/gif-list.component";

@Component({
  selector: 'app-trending-pages.component',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './trending-pages.component.html',
  styleUrl: './trending-pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingPagesComponent { }
