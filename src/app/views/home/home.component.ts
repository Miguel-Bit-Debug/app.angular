import { Produto } from './../interfaces/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos!: Produto[]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.BuscarProdutos().subscribe((produtos) => {

      if(produtos)
        this.produtos = produtos
      });
  }
}
