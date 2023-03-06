import { Component, OnInit } from '@angular/core';
import { CountryDataService } from 'src/libs/app.service';

@Component({
  selector: 'result',
  templateUrl: './result.html',
  styleUrls: ['./result.css'],
})
export class Result implements OnInit {
  Obj = Object
  constructor(public countryService: CountryDataService) {}
  ngOnInit(): void {
    console.log(this.countryService.citiesResult);

}
}
