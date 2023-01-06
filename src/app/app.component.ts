import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration-demo';

  name:string = '';
  mobile: string = '';
  email: string = '';
  displayMessage: boolean = false;

  onFormSubmitted(event: {name: string, mobile: string, email:string}){
      this.name = event.name;
      this.mobile = event.mobile;
      this.email = event.email;
      this.displayMessage = true;
    console.log("name " + this.name + ",mobile " + this.mobile + ",email " + this.email 
    + ",display " + this.displayMessage);
  }
}
