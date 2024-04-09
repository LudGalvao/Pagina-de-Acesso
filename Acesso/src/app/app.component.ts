import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { AcessoLateralComponent } from './componentes/acesso-lateral/acesso-lateral.component';
import { AcessoPrincipalComponent } from './componentes/acesso-principal/acesso-principal.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,MatSidenavModule, FormsModule, RouterOutlet, CommonModule, MatListModule, RouterLink, RouterLinkActive,AcessoLateralComponent, AcessoPrincipalComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testeAngular';
  opened = false;

  toggleSidenav() {
    this.opened = !this.opened;
  }

  closeSidenav(sidenav: MatSidenav) {
    sidenav.close();
  }
}
