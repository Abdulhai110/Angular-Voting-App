import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { PositionComponent } from './position/position.component';
import { AppDataService } from 'src/libs/app.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CountryModule } from './country/country.module';

@NgModule({
  declarations: [
    AppComponent,
      CandidateComponent,
      PositionComponent,
   ],
  imports: [
    BrowserModule,
    CommonModule,
    CountryModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'candidate',
        component:CandidateComponent
      },
      {
        path:'position',
        component:PositionComponent
      },
      {
        path:"country",
        loadChildren:()=>import('./country/country.module')
        .then(mod => mod.CountryModule)
      }
    ])
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
