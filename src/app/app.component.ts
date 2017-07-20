import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  obj = {
    id  : "1",
    name  : "vamshi"
  }
  arr=["abc","def","ghi"];
  isTrue=true;
  myName="Vamshi";
}
