import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
   albums:any;
  constructor(private album:FetchService){}
  ngOnInit(): void {
    this.album.getTitle().subscribe(data=>{
      this.albums=data
    })
  }

}
