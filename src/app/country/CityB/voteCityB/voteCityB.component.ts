import { Component, OnInit } from '@angular/core';
import { AppDataService, CityBDataService, CountryDataService } from 'src/libs/app.service';

@Component({
  selector: 'app-voteCityB',
  templateUrl: './voteCityB.component.html',
  styleUrls: ['./voteCityB.component.css']
})
export class VoteCityBComponent implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityBService: CityBDataService,
    public appDataService: AppDataService,
    public countryService: CountryDataService
  ) {}
  ngOnInit(): void {
    this.cityBService.cityBResult = [];

    this.appDataService.candidates.filter((i) => {
      if (i.city == 'CityB' && i.cityPosition != null && i.city != null ) {
        var obj = {
          id: i.id,
          name: i.name,
          city: i.city,
          cityPosition: i.cityPosition,
          vote: 0,
        };
        this.cityBService.cityBResult.push(obj);
      }
    });
  }
  Vote(id: number) {
    this.cityBService.cityBResult.forEach((i:any) => {
      if (i.id == id) {
        i.vote += 1;
        return;
      }
    });
  }
  closePolling() {
    this.cityBService.closePooling = !this.cityBService.closePooling;
    const winner = this.cityBService.cityBResult.reduce((previous:any, current:any)=> {
      return previous.vote > current.vote ? previous : current;
    });
    this.cityBService.cityWinner = winner;
    this.countryService.citiesResult[1].cityB = this.cityBService.cityBResult;
  }

}



