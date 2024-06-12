import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from '../../admin-panel/login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { GoUrlService } from '../../../service/go-url.service';

@Component({
  selector: 'rca-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoginFormComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isLogin: boolean = false;
  public userImg: string = 'assets/icon/';
  
  constructor(
    private goUrlService: GoUrlService
  ) {
    this.userImg += 'login out.png';
  }

  public loginVisible(){
    if (this.userImg === 'assets/icon/login out.png')
      {
        this.isLogin = !this.isLogin;
      }
      else
      {
        this.goUrlService.goToUrl('personal-area');
      }
    }
      
    public returnLogin() {
      this.isLogin = false;
    }
    
  public returnImage(image: string) {
    this.userImg = 'assets/icon/' + image;
  }
}
