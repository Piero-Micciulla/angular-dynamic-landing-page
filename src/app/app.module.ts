import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeGridComponent } from './components/home-grid/home-grid.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
// API call
import {HttpClientModule} from '@angular/common/http';
// ivy carousel
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ImagesSequenceComponent } from './components/images-sequence/images-sequence.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    HomeGridComponent,
    TestimonialsComponent,
    ImagesSequenceComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
