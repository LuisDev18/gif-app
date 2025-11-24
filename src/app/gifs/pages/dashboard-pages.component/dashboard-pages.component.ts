import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu.component/side-menu.component'

@Component({
  selector: 'app-dashboard-pages',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-pages.component.html',
  styleUrl: './dashboard-pages.component.css',
})
export class DashboardPagesComponent { }
