import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/firebase/data.service';

@Component({
  selector: 'rca-personal-area',
  standalone: true,
  imports: [],
  templateUrl: './personal-area.component.html',
  styleUrl: './personal-area.component.scss'
})
export class PersonalAreaComponent implements OnInit {
  constructor(private dataService: DataService){}

  ngOnInit() {
    this.dataService.getData('recept').subscribe(data =>{
      console.log(data);
    })
  }
}
