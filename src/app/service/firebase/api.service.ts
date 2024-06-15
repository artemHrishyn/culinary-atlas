import { Injectable } from '@angular/core';

const BASE_URL: string = 'https://culinary-atlas-default-rtdb.europe-west1.firebasedatabase.app/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public source: Record<string, string> = {
    recept: `${BASE_URL}recept`
  }
}
