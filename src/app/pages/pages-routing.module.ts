import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'contact', component: ContactComponent,},
      { path: 'product', component: ProductComponent,},
    ]
  },
  // {
  //   path: 'form', component: StoreFormComponent,
  // },
  // {
  //   path: 'form/:id',
  //   component: StoreFormComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
