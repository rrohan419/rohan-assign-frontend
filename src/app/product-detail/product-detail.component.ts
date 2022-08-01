import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../Services/http-service.service';

interface Product{
  name : string,
  currency : string,
  amount :number,
  quantity : number,
  cancleUrl : string,
  successUrl : string
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  stripePormise = loadStripe(environment.stripekey);

  constructor(private httpService : HttpServiceService,private http:HttpClient) { }
  
  products:any;

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data)=>{
      this.products=data.data;
      console.log(this.products);
    })
   
  }

  // async testpay() : Promise<void>
  // {
    
  //   const payment = {
  //     name : "rohan",
  //     currency : 'usd',
  //     amount : 80000,
  //     quantity : '2',
  //     cancleUrl : '',
  //     successUrl : 'http://localhost:4200/success' 
  //   };
  //   const stripe = await this.stripePormise;

  //   this.https.post(`/api/payment`,payment)
  //   .subscribe((data:any)=>{
  //     stripe?.redirectToCheckout({
  //       sessionId : data.id,
  //     });
  //   });
  // }

  async pay(product:any,itemQuantity:any) : Promise<void>
  {
    console.log(product,"abbb");
    console.log(itemQuantity,"kkakak");
    const payment : Product = {
      name : product.name,
      currency : 'usd',
      amount : product.price*10*10,
      quantity : itemQuantity,
      cancleUrl : 'http://localhost:4200/',
      successUrl : 'http://localhost:4200/success' 
    };

    const stripe = await this.stripePormise;

    this.http.post(`${environment.target}/api/payment`,payment)
    .subscribe((data:any)=>{
      stripe?.redirectToCheckout({
        sessionId : data.id,
      });
    });
  }
}
