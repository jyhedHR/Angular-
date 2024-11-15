import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/models/categorie';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent {

  constructor(private router:Router){}

  test: string = '10';
  categoorie: category[] =[{"id":1,"title":"Grand électroménager",
    "image":"assets/images/categorie_electromenager.jpg", "description":"We and our 845 partners store and access personal data, like browsing data or unique identifier whereas selecting  or withdrawing your consent will disable them. If trackers are disabled, some content and ads you see may not be as relevant to you. You can resurface this menu to change your choices or withdraw consent at any time by clicking the link on the bottom of the webpage [or the floating icon on the bottom-left of the webpage, if applicable]. Your choices will have effect within our Site Web. For more details, refer to our Privacy Policy.",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/categorie_petit_electromenager.jpg", "description":"",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/categorie_produits_informatiques.jpg", "description":"",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
    "description":"", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/images/categorie_tv_image_son.jpg", "description":"",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
    "description":"","available":false},
    ];

    title:string=''
   afficherDescription(id:number)
   {

    this.categoorie.forEach(Element => {
    if (Element.id==id) {
      alert(Element.description)
    }

    })

    let categoorie = this.categoorie.filter(Element => Element.id == id)[0]
    alert(categoorie.description)
   }
   changeTest() {
    this.test = '12';
  }
  DeleteCategory(event: any) {
    console.log(event)
    this.categoorie= this.categoorie.filter((c) => c.id != event);
  }
toUpdate(c:category){
  console.log(JSON.stringify(c));
  this.router.navigate(['/category/update/',JSON.stringify(c)])
}

}
