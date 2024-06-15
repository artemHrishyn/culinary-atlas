import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/main-block/header/header.component';
import { FooterComponent } from './components/main-block/footer/footer.component';
import { FirebaseModule } from './firebase.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/firebase/data.service';

@Component({
  selector: 'rca-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FirebaseModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  providers:[
    DataService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'culinary-atlas';
}
