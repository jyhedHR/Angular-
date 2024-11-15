import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/produit';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() data_p!:Product;
  @Input({ alias: "t_p"}) test!:string

  @Output() d_p = new EventEmitter();

  deleteChild() {
    this.d_p.emit(this.data_p.id);
  }
}
