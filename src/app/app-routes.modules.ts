import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AdvertisementDetailComponent } from './advertisements/advertisement-detail/advertisement-detail.component';
import { AdvertisementListComponent } from './advertisements/advertisement-list/advertisement-list.component';
import { AdvertisementNewComponent } from './advertisements/advertisement-new/advertisement-new.component';
import { ViewCategoriesComponent } from './advertisements/categories/view-categories/view-categories.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'new', component: AdvertisementNewComponent },
    { path: 'list', component: AdvertisementListComponent},
    { path: 'categories', component: ViewCategoriesComponent},
    { path: ':id', component: AdvertisementDetailComponent}
]   

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}