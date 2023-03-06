import { Component, OnInit } from '@angular/core';
import { CityCDataService, AppDataService } from 'src/libs/app.service';

@Component({
  selector: 'app-cityCResult',
  templateUrl: './cityCResult.component.html',
  styleUrls: ['./cityCResult.component.css']
})
export class CityCResultComponent implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityCService: CityCDataService,
    public appDataService: AppDataService,
    public countryService: CityCDataService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
