import { Injectable } from "@angular/core";

@Injectable()
export class AppDataService{
  candidates = [
    {
      id:1,
      name: 'Hadi Haider',
      city: 'CityA',
      countryPosition: 'President',
      cityPosition: 'Magistrate',
      edit: false,
    },
    {
      id:2,
      name: 'Mehdi Raza',
      city: 'CityB',
      countryPosition: 'Vice President',
      cityPosition: 'Mayor',
      edit: false,
    },
    {
      id:3,
      name: 'Imran Khan',
      city: 'CityC',
      countryPosition: 'President',
      cityPosition: 'Mayor',
      edit: false,
    },
  ];

  positions = {
    city: [
      { name: 'Mayor', status: 'open', edit: false },
      { name: 'Magistrate', status: 'open', edit: false },
    ],
    country: [
      { name: 'President', status: 'open', edit: false },
      { name: 'Vice President', status: 'open', edit: false },
    ],
  };

  cities = ['CityA', 'CityB', 'CityC'];
}


@Injectable()
export class CountryDataService{
 countryResult:any=[]
 citiesResult:any=[
  {
    cityA:{}
  },
  {
    cityB:{}
  },
  {
    cityC:{}
  }
 ]
 closePolling: boolean = true;
 CountryWinner: any = {};
}


@Injectable()
export class CityADataService{
  cityAResult:any=[]
  cityWinner: any = {};
  closePooling: boolean = true;
}


@Injectable()
export class CityBDataService{
  cityBResult:any=[]
  cityWinner: any = {};
  closePooling: boolean = true;
}


@Injectable()
export class CityCDataService{
  cityCResult:any=[]
  cityWinner: any = {};
  closePooling: boolean = true;

}
