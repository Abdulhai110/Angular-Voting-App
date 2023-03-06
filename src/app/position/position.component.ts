import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { count } from 'rxjs';
import { AppDataService } from 'src/libs/app.service'
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  addCountryPositionForm!: FormGroup
  addCityPOsitionForm!: FormGroup
  country:boolean=true;
  addCountryForm:boolean=false;
  city:boolean=true

  constructor(public appDataService: AppDataService) { }

  ngOnInit() {
     this.addCountryPositionForm = new FormGroup({
      countryPosition : new FormControl(null,[Validators.required])
     })
     this.addCityPOsitionForm = new FormGroup({
      cityPosition : new FormControl(null,[Validators.required])
     })
  }


// Add Positon
  add(){
    this.addCountryForm = true;
    this.country = false
  }
  addCountryPosition(){
    const data = this.addCountryPositionForm.getRawValue()
    console.log(data);

    if(this.addCountryPositionForm.controls['countryPosition'].errors?.['required'])
    {
      alert("Field Required")
    }
    else
    {
      let obj ={
        name: data.countryPosition,
        status: 'open',
        edit: false
      }
      this.appDataService.positions.country.push(obj)
      console.log(this.appDataService.positions.country);

      this.addCountryPositionForm.reset()
      this.addCountryForm=false
      this.country=true
    }


  }

  addCityPosition(){
    const data = this.addCityPOsitionForm.getRawValue()
    if(this.addCityPOsitionForm.controls['cityPosition'].errors?.['required'])
    {
      alert("Field Required")
    }
    else
    {
      let obj = {
        name: data.cityPosition,
        status: 'open',
        edit: false
      }
      this.appDataService.positions.city.push(obj)
      this.city = !this.city
      this.addCityPOsitionForm.reset()
    }

  }


  deleteCountryPosition(name:any){
    this.appDataService.positions.country = this.appDataService.positions.country.filter((item)=>{
      return item.name != name
    })
  }


  deleteCityPosition(name:any){
    this.appDataService.positions.city = this.appDataService.positions.city.filter((item)=>{
      return item.name != name
    })
  }


  listOfPosition(){

  }
}
