import { Component } from '@angular/core';
// import { User } from './User';
// import { DataServiceService } from './data-service';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'samuelamujoscrumy';
  // userModel = new User('dotun', 'qwert');
  userModel = new DataServiceService('dotun', 'qwert' , 'dotun@gmail.com');
  // regModel = new DataServiceService('dotun', 'qwert', 'dotun@gmail.com');
}
