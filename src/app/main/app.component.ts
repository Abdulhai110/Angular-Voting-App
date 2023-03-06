import { AppDataService } from 'src/libs/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Voting-Application';

  constructor(private data: AppDataService){}

  ngOnInit(): void {


  }
 chnge(){
  alert(this.data.candidates[0].name)
  console.log()
 }
}
