import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
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
  constructor(private storageService: StorageService, private bnIdle: BnNgIdleService, private authService: AuthService) { 
  }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.username = user.username;
    }

    this.bnIdle.startWatching(300).subscribe((res) => {
      if (res) {
         this.logout()
        console.log('session expired');
       //this.router.navigateByUrl('logout');
      }
    });
  }
  sideBarToggler(){
    this.sideBarOpen =!this.sideBarOpen;
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        this.storageService.clean();
        window.location.reload();
      }
    });
  }

}
