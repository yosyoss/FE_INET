import { Component } from '@angular/core';
import {ProductService} from "./product.service";
import {Computer} from "./model/computer";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  computers: Computer[] = []
  isLoading: boolean = false;
  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.isLoading = true;
    this.productService.getComputers(this.currentPage, this.pageSize).subscribe((res: any) => {
      this.isLoading = false;
      this.computers.push(...res.data);
      console.log(this.computers)
      this.totalPages = res.totalPages;
    });
  }

  calculateDisplayNumber(index: number): number {
    return index + 1 + this.currentPage * this.pageSize;
  }
}