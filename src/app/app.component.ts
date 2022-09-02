import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { MessageService } from './service/message.service';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  sideBarOpen = true;
  title = 'sms-gateway';
  isLoggedIn = false;
  username?: string;
  constructor(private storageService: StorageService) { 
  }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.username = user.username;
    }
  }
  sideBarToggler(){
    this.sideBarOpen =!this.sideBarOpen;
  }

}
