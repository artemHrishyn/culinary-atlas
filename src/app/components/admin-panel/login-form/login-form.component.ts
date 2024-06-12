import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoUrlService } from '../../../service/go-url.service';

@Component({
  selector: 'rca-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    GoUrlService
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  
  @Input() isLogin: boolean = false;
  @Output() closeLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() imgLogin: string = '';
  @Output() returnImgLogin: EventEmitter<string> = new EventEmitter<string>();
  
  public loginData: FormGroup;
  
  constructor(private goUrlService: GoUrlService) {
    this.loginData = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8), // Минимальная длина пароля
        Validators.pattern(/[a-z]/), // Хотя бы одна строчная буква
        Validators.pattern(/[A-Z]/), // Хотя бы одна заглавная буква
        Validators.pattern(/[0-9]/), // Хотя бы одна цифра
        Validators.pattern(/[!@#$%^&*()\-=_+[\]{}|\\,.<>/?~]/) // Хотя бы один специальный символ
      ])
    })
  }
  
  SignOut() {
    this.goUrlService.goToUrl('main');
    this.isLogin = !this.isLogin
    this.closeLogin.emit(this.isLogin);
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      if (form.value.login == 'admin' && form.value.password == 'adminA1.')
      {
        this.goUrlService.goToUrl('personal-area');
        this.imgLogin = 'login in.png';
        this.closeLogin.emit(this.isLogin);
        this.returnImgLogin.emit(this.imgLogin);
      }
      else {
        form.reset();
      }
   }
 }
}
