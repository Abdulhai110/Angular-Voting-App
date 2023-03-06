import { CityAResultComponent } from './cityAResult/cityAResult.component';
import { VoteCityAComponent } from './voteCityA/voteCityA.component';
import { RouterModule } from '@angular/router';
import { CityADataService } from './../../../libs/app.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityAComponent } from './CityA.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'vote',
        component:VoteCityAComponent
      },
      {
        path:'result',
        component:CityAResultComponent
      }
    ])
  ],
  declarations: [CityAComponent,VoteCityAComponent,CityAResultComponent],
  providers:[CityADataService]
})
export class CityAModule { }
