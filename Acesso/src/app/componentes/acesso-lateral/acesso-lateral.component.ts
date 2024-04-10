import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { EmpresaService } from '../../services/empresa.service';
import { Empresa } from '../../model/ListaCompartilhadaArquivo';

@Component({
  selector: 'app-acesso-lateral',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './acesso-lateral.component.html',
  styleUrl: './acesso-lateral.component.css'
})

export class AcessoLateralComponent {
  constructor(private empresaService: EmpresaService) {} 
}