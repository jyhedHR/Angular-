import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { category } from 'src/app/models/categorie';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {
  constructor(private activated:ActivatedRoute){}
category!:category;
ngOnInit(): void {
  this.category=new category();
  this.activated.params.subscribe({
    next: (param)=>{

      if(param['objet'] !=undefined){
        console.log(JSON.parse(param['objet']))
        this.category=JSON.parse(param['objet'])
      }
    }

  })
}
add(){

  console.log(this.category);
}
}
