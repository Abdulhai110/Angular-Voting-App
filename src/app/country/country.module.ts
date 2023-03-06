import { VoteCountryComponent } from './voteCountry/voteCountry.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './main/country.component';
import { CountryDataService } from 'src/libs/app.service';
import { Result } from './result/result.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'vote',
        component:VoteCountryComponent
      },
      {
        path:'result',
        component:Result
      },
      {
        path:'cityA',
        loadChildren:()=> import('./CityA/CityA.module')
        .then(mod => mod.CityAModule)
      },
      {
        path:'cityB',
        loadChildren:()=> import('./CityB/CityB.module')
        .then(mod => mod.CityBModule)
      },
      {
        path:'cityC',
        loadChildren:()=> import('./CityC/CityC.module')
        .then(mod => mod.CityCModule)
      }
    ])
  ],
  declarations: [CountryComponent,VoteCountryComponent,Result
  ],
  providers:[CountryDataService]
})
export class CountryModule { }
