import { RouterModule } from '@angular/router';
import { VoteCityBComponent } from './voteCityB/voteCityB.component';
import { CityBDataService } from './../../../libs/app.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityBComponent } from './CityB.component';
import { CityBResultComponent } from './cityBResult/cityBResult.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'vote',
        component:VoteCityBComponent
      },
      {
        path:'result',
        component:CityBResultComponent
      }
    ])
  ],
  declarations: [CityBComponent,VoteCityBComponent,CityBResultComponent],
  providers:[CityBDataService]
})
export class CityBModule { }
