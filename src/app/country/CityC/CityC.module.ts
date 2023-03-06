import { VoteCityCComponent } from './voteCityC/voteCityC.component';
import { RouterModule } from '@angular/router';
import { CityCDataService } from './../../../libs/app.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCComponent } from './CityCResult.component';
import { CityCResultComponent } from './cityCResult/cityCResult.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'vote',
        component:VoteCityCComponent
      },
      {
        path:'result',
        component:CityCResultComponent
      }
    ])
  ],
  declarations: [CityCComponent,VoteCityCComponent,CityCResultComponent],
  providers:[CityCDataService]
})
export class CityCModule { }
