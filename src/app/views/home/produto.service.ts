import { environment } from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {  }

  baseApiUrl: string = environment["baseUrl"]

  public BuscarProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseApiUrl);
  }
}

