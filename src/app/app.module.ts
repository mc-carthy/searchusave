import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routes.modules';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdvertisementDetailComponent } from './advertisements/advertisement-detail/advertisement-detail.component';

import { AdvertisementsService } from './advertisements/advertisements.service';
import { PostcodeLookupComponent } from './postcode-lookup/postcode-lookup.component';
import { AdvertisementListComponent } from './advertisements/advertisement-list/advertisement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdvertisementDetailComponent,
    PostcodeLookupComponent,
    AdvertisementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      AdvertisementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
