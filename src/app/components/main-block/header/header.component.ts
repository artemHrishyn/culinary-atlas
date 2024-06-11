import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from '../../admin-panel/login-form/login-form.component';
import { CommonModule } from '@angular/common';

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

  public loginVisible(){
    this.isLogin = !this.isLogin;
  }
}
