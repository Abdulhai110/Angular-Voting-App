import { Component, OnInit } from '@angular/core';
import { AppDataService, CityCDataService, CountryDataService } from 'src/libs/app.service';

@Component({
  selector: 'app-voteCityC',
  templateUrl: './voteCityC.component.html',
  styleUrls: ['./voteCityC.component.css']
})
export class VoteCityCComponent implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityCService: CityCDataService,
    public appDataService: AppDataService,
    public countryService: CountryDataService
  ) {}
  ngOnInit(): void {
    this.cityCService.cityCResult = [];

    this.appDataService.candidates.filter((i) => {
      if ( i.city == 'CityC' && i.cityPosition != null && i.city != null) {
        var obj = {
          id: i.id,
          name: i.name,
          city: i.city,
          cityPosition: i.cityPosition,
          vote: 0,
        };
        this.cityCService.cityCResult.push(obj);
      }
    });
  }
  Vote(id: number) {
    console.log(id);
    this.cityCService.cityCResult.forEach((i:any) => {
      if (i.id == id) {
        i.vote += 1;
        return;
      }
    });
  }
  closePolling() {
    this.cityCService.closePooling = !this.cityCService.closePooling;
    // this.show = !this.show;
    const winner = this.cityCService.cityCResult?.reduce((previous:any, current:any)=> {
      return previous.vote > current.vote ? previous : current;
    });
    this.cityCService.cityWinner = winner;
    this.countryService.citiesResult[2].cityC = this.cityCService.cityCResult;
  }

}
