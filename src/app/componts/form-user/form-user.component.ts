import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  constructor(private activated:ActivatedRoute){}
User!:User;
ngOnInit(): void {
  this.User=new User();
  this.activated.params.subscribe({
    next: (param)=>{

      if(param['objet'] !=undefined){
        console.log(JSON.parse(param['objet']))
        this.User=JSON.parse(param['objet'])
      }
    }

  })
}
add(){

  console.log(this.User);
}

}
