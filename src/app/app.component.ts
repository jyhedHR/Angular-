import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulerep1';
  person = { 
    id: 1 ,
    name: 'test',
    age:20
  }
  quantity = 8;
  imgsrc = "assets/images.png";
  color=  "red";
  acheter() {
    this.quantity--;
  }
  onInputChange(event:Event ){

    const el = event.target as HTMLInputElement
    this.color = el.value
  }
}
