import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent  implements OnInit,OnDestroy{
search:string="";

listProducts : Product[]=[];
list:Product[]=[];
  id!: number;

  constructor(private activated:ActivatedRoute){


  }

  test: string = '10';
  ngOnDestroy() {
    console.log()
  }
ngOnInit(){


  this.listProducts =[
    {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0 , "nb_likes":0 , "quantity":10},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0, "nb_likes":0 , "quantity":10},
    {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0, "nb_likes":0 , "quantity":10},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0, "nb_likes":0 , "quantity":10},
    {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0, "nb_likes":0 , "quantity":10},
    {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0, "nb_likes":0 , "quantity":10},
  ]




    this.activated.paramMap.subscribe(res=>{this.id=Number(res.get('id'));
  for(let p of this.listProducts){
     if (p.categoryId == this.id){
      this.list.push(p);
     }
  }})
  }
  increment(p :Product){

p.nb_likes++;
  }
buy(p:Product){

p.quantity--;
}

changeTest() {
  this.test = '12';
}
DeleteProduit(event: any) {
  console.log(event)
  this.listProducts= this.listProducts.filter((p) => p.id != event);
}
}
