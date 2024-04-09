import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-acesso-principal',
  standalone: true,
  imports: [MatIconModule, EmpresaService],
  templateUrl: './acesso-principal.component.html',
  styleUrl: './acesso-principal.component.css'
})
export class AcessoPrincipalComponent {

}
