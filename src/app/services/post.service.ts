import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../entity/Post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  basePath = 'https://localhost:5005/account/';

  constructor(private apiService: ApiService) { }

  getPostsByAccount(accountId: string): Observable<Post[]>{
    return this.apiService.get(this.basePath + accountId);
  }
}
