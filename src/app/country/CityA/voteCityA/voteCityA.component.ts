import { CityADataService } from './../../../../libs/app.service';
import { AppDataService, CountryDataService } from 'src/libs/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voteCityA',
  templateUrl: './voteCityA.component.html',
  styleUrls: ['./voteCityA.component.css']
})
export class VoteCityAComponent implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityAService: CityADataService,
    public appDataService: AppDataService,
    public countryService: CountryDataService
  ) {}
  ngOnInit(): void {
    this.cityAService.cityAResult = [];

    this.appDataService.candidates.filter((a) => {
      if (a.city == 'CityA' && a.cityPosition != null && a.city != null) {
        var obj = {
          id: a.id,
          name: a.name,
          city: a.city,
          cityPosition: a.cityPosition,
          vote: 0,
        };
        this.cityAService.cityAResult.push(obj);
      }
    });
  }
  Vote(id: number) {
    console.log(id);
    this.cityAService.cityAResult.forEach((i:any) => {
      if (i.id == id) {
        i.vote  +=  1;
        return;
      }
    });
  }
  closePolling() {
    this.cityAService.closePooling = !this.cityAService.closePooling;
    let winner = this.cityAService.cityAResult.reduce((previous:any, current:any)=> {
      return previous.vote > current.vote ? previous : current;
    });
    this.cityAService.cityWinner = winner;
    this.countryService.citiesResult[0].cityA = this.cityAService.cityAResult;
  }

}
