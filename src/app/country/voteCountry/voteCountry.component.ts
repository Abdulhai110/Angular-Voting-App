import { AppDataService, CountryDataService } from 'src/libs/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voteCountry',
  templateUrl: './voteCountry.component.html',
  styleUrls: ['./voteCountry.component.css']
})
export class VoteCountryComponent implements OnInit {
  vote: number = 0;
  show: boolean = true;
  winner: any = '';
  constructor(public appDataService: AppDataService, public countryService: CountryDataService) {}
  ngOnInit(): void {
    this.countryService.countryResult = [];
    this.appDataService.candidates.filter((i) => {
      if (i.countryPosition != 'N/A' && i.countryPosition != null  ) {
        var obj = {
          id: i.id,
          name: i.name,
          countryPosition: i.countryPosition,
          vote: 0,
        };
        this.countryService.countryResult.push(obj);
      }
    });
    console.log(this.countryService.countryResult);

  }
  Vote(id: number) {
    console.log(id);
    this.countryService.countryResult.forEach((i:any) => {
      if (i.id == id) {
        i.vote += 1;
        return;
      }
    });
  }
  closePolling() {
    this.countryService.closePolling = !this.countryService.closePolling;
    const winner = this.countryService.countryResult.reduce((previous:any, current:any)=> {
      return previous.vote > current.vote ? previous : current;
    });
    //Winner
    this.countryService.CountryWinner = winner;

  }

}
