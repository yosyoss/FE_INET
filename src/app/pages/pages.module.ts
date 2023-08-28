import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoadingComponent} from "../shared/loading/loading.component";
import {LoadingService} from "../shared/loading/loading.service";
import {HomeComponent} from "./home/home.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CustomerService} from "./customer/customer.service";
import {CustomerComponent} from "./customer/customer-list/customer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HeaderComponent} from "./header/header.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductComponent} from "./product/product.component";
import {ProductService} from "./product/product.service";
import {ProfileComponent} from "./profile/profile.component";


@NgModule({
    declarations: [
        LoadingComponent,
        HomeComponent,
        SidebarComponent,
        HeaderComponent,
        CustomerComponent,
        ContactComponent,
        ProductComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        FlexLayoutModule,
        NgOptimizedImage,
    ],
    exports: [
        LoadingComponent
    ],
    providers: [CustomerService, LoadingService, ProductService]
})
export class PagesModule { }
