import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
product!:FormGroup
ngOnInit() {

  this.product=new FormGroup({
    name: new FormControl('Test',[Validators.required]),
    image:new FormControl(),
    description:new FormControl( ),
    price:new FormControl(),
    brand:new FormGroup({
      name:new FormControl(),
      logo:new FormControl(),
    }),
    promotion:new FormControl(),
    quantity:new FormControl(),
    nb_like:new FormControl(Validators.required),
    tags:new FormArray([new FormControl()]),


  })


}
get name(){
  return this.product.get('name') as FormControl
}
get tags(): FormControl[]{
return (this.product.get('tags') as FormArray)!.controls as FormControl[]
}
addtags(){
  this.tags.push(new FormControl());
}
add(){
  console.log(this.tags)
  console.log(this.product.get('name'));//retourne formcontrol
  console.log(this.product.value)//retourne toute les valeurs mais ne retourne pas les valeurs  disabled
  console.log(this.product.getRawValue()) //retourne toutes les valeurs meme si les valeurs  disabled
  console.log(this.product.get('brand')!.get('name')); //recuperer une valeur(formcontrol) de formgroup a partir d'une autre formgroup
}
}
