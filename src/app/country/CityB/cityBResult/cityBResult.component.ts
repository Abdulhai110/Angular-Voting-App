import { Component, OnInit } from '@angular/core';
import { CityBDataService, AppDataService, CountryDataService } from 'src/libs/app.service';

@Component({
  selector: 'app-cityBResult',
  templateUrl: './cityBResult.component.html',
  styleUrls: ['./cityBResult.component.css']
})
export class CityBResultComponent implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityBService: CityBDataService,
    public appDataService: AppDataService,
    public countryService: CountryDataService
  ) {}
  ngOnInit() {
  }

}
