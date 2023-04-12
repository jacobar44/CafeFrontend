import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPreviewListComponent } from './product-preview-list/product-preview-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    ProductPreviewComponent,
    ProductPreviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
