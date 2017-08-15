import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routes.modules';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdvertisementDetailComponent } from './advertisements/advertisement-detail/advertisement-detail.component';
import { PostcodeLookupComponent } from './postcode-lookup/postcode-lookup.component';
import { AdvertisementListComponent } from './advertisements/advertisement-list/advertisement-list.component';
import { ViewCategoriesComponent } from './advertisements/categories/view-categories/view-categories.component';

import { AdvertisementsService } from './advertisements/advertisements.service';
import { CategoriesService } from './advertisements/categories/categories.service';
import { AdvertisementNewComponent } from './advertisements/advertisement-new/advertisement-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdvertisementDetailComponent,
    PostcodeLookupComponent,
    AdvertisementListComponent,
    ViewCategoriesComponent,
    AdvertisementNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      AdvertisementsService,
      CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
