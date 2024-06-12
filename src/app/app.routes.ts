import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ReverseConnectionComponent } from './pages/reverse-connection/reverse-connection.component';
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component';

export const routes: Routes = [
    
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: MainComponent },
  { path: "personal-area", component: PersonalAreaComponent },
  { path: "reverse-connection", component: ReverseConnectionComponent }
];
