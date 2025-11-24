import { Component } from '@angular/core';
import { SideMenuOptionComponent } from '../../components/side-menu-options.component/side-menu-option.component';
import { SideMenuHeaderComponent } from '../../components/side-menu-header.component/side-menu-header.component';


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [SideMenuOptionComponent, SideMenuHeaderComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
 
}
