import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAlbums } from './IAlbums';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  albums_url: string ="https://jsonplaceholder.typicode.com/albums";
  constructor(private throughhttp: HttpClient) {}
    getTitle():Observable<IAlbums>{
                  return this.throughhttp.get<IAlbums>(this.albums_url)
    }
 
  
}
