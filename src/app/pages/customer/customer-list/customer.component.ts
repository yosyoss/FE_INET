import { Component } from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor(private readonly service: CustomerService,
              private readonly authService: AuthService,
              private readonly route: Router) {
    this.getAllCustomer();
  }
  isLoading: boolean = false;
  currentPage: number = 0;
  pageSize: number = 10;
  totalPages: number = 0;
  customers: Customer[] = [];
  ngOnInit(){
    this.getAllCustomer()
  }

  getAllCustomer() {
    this.isLoading = true;
    this.service.getCustomer(this.currentPage, this.pageSize).subscribe((res: any) => {
      this.isLoading = false;
      this.customers = res.data;
      this.totalPages = res.totalPages;
    });
  }

  totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  calculateDisplayNumber(indexOnPage: number): number {
    return this.currentPage * this.pageSize + indexOnPage + 1;
  }

  changePage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.getAllCustomer();
    }
  }
}
