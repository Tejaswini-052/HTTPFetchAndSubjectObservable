import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchService } from './fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
