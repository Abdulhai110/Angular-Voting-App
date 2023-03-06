import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/libs/app.service';

@Component({
  selector: 'app-country',
  templateUrl: 'country.component.html',
  styleUrls: ['country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(public data: AppDataService) { }

  ngOnInit() {
  }

  voteForCountry(){
    alert(this.data.candidates[0].name)
    this.data.candidates[0].name="Abdul Hai Khan"
    alert(this.data.candidates[0].name)

  }
}
