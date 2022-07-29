import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private http : HttpServiceService) { }
  products:any;
  ngOnInit(): void {
    this.http.getProducts().subscribe((data)=>{
      this.products=data.data;
      console.log(this.products);
    })
   
  }

  pay(id:any){
    // const
  }
}
