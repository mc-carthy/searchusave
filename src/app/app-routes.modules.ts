import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AdvertisementDetailComponent } from './advertisements/advertisement-detail/advertisement-detail.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
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