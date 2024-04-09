import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-acesso-lateral',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './acesso-lateral.component.html',
  styleUrl: './acesso-lateral.component.css'
})

export class AcessoLateralComponent {
  constructor(private empresaService: EmpresaService) {} // Injete o serviço no construtor
}