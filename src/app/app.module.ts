import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';

import { ROUTES } from './app.router';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ArtistComponent,
    SearchComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
