import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOption {
  icono: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'app-side-menu-option',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-option.component.html',
  styleUrl: './side-menu-option.component.css'
})
export class SideMenuOptionComponent {
 menuOptions: MenuOption[] = [
    {
      icono: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      subLabel: 'Top trending gifs'
    },
    {
      icono: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: '/dashboard/search',
      subLabel: 'Find your favorite gifs'
    }
  ]
}
