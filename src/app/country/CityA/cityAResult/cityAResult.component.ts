import { Component, OnInit } from '@angular/core';
import { CityADataService, AppDataService } from 'src/libs/app.service';

@Component({
  selector: 'app-cityAResult',
  templateUrl: './cityAResult.component.html',
  styleUrls: ['./cityAResult.component.css']
})
export class CityAResultComponent implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityAService: CityADataService,
    public appDataService: AppDataService,
    public countryService: CityADataService
  ) {}
  ngOnInit(): void {}

}
