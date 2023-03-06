import { AppDataService } from './../../libs/app.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  // addCandidateForm: FormGroup | any
  addCandidateForm:any = this.fb.group({
    candidateName : new FormControl("",[Validators.required]),
    candidateCity : new FormControl("",[Validators.required]),
    candiateCountryPosition : new FormControl("",[Validators.required]),
    candiateCityPosition : new FormControl("",[Validators.required])
    })
  service : boolean = false
  candidate:boolean = true
  constructor(
    public fb: FormBuilder,
    public appDataService: AppDataService
    ) { }

  ngOnInit() {
    // this.addCandidateForm = new FormGroup({
    //   candidateName : new FormControl("",[Validators.required]),
    //   candidateCity : new FormControl("N/A",[Validators.required]),
    //   candiateCountryPosition : new FormControl("N/A",[Validators.required]),
    //   candiateCityPosition : new FormControl("N/A",[Validators.required])
    // })

  }

  listOfCandidates(){

  }



  addCandidate(){
    console.log(this.addCandidateForm.value);

    if(this.addCandidateForm.invalid)
    {
      if(this.addCandidateForm.controls['candidateName'].errors?.['required'])
      {
        alert("Name Filed Required")
      }
      else if(this.addCandidateForm.value.candidateCity=="")
      {
        alert("City Filed Required")
      }
      else if(this.addCandidateForm.controls['candiateCountryPosition'].errors?.['required'] && this.addCandidateForm.controls['candiateCityPosition'].errors?.['required'])
      {
        alert("Atleast One Position Required")
      }

      else if(this.addCandidateForm.controls['candiateCountryPosition'].errors?.['required'] || this.addCandidateForm.controls['candiateCityPosition'].errors?.['required'] )
      {
        console.log(this.addCandidateForm);

        if(this.addCandidateForm.controls['candiateCountryPosition'].errors?.['required'])
        {
          let obj={
            id: Math.floor(Math.random() * 10),
            name: this.addCandidateForm.controls['candidateName'].value,
            city:this.addCandidateForm.controls['candidateCity'].value,
            countryPosition:'N/A',
            cityPosition: this.addCandidateForm.controls['candiateCityPosition'].value,
            edit: false
          }
          this.appDataService.candidates.push(obj)
          this.addCandidateForm.reset({
            candidateName : "",
            candidateCity : "CityA",
            candiateCountryPosition : "" ,
            candiateCityPosition :""
          })
          this.candidate = !this.candidate
        }
        else
        {
          let obj={
            id: Math.floor(Math.random() * 10),
            name: this.addCandidateForm.controls['candidateName'].value,
            city:this.addCandidateForm.controls['candidateCity'].value,
            countryPosition:this.addCandidateForm.controls['candiateCountryPosition'].value,
            cityPosition: 'N/A',
            edit: false
          }
          console.log(obj);

          this.appDataService.candidates.push(obj)
          this.addCandidateForm.reset()
          this.candidate = !this.candidate
        }

      }
    }
    else
    {
        let obj={
          id: Math.floor(Math.random() * 10),
          name: this.addCandidateForm.controls['candidateName'].value,
          city:this.addCandidateForm.controls['candidateCity'].value,
          countryPosition: this.addCandidateForm.controls['candiateCountryPosition'].value,
          cityPosition: this.addCandidateForm.controls['candiateCityPosition'].value,
          edit: false
        }

        this.appDataService.candidates.push(obj)
        this.addCandidateForm.reset()
        this.candidate = !this.candidate
    }

  }
  deleteCandidate(id:any){
    this.appDataService.candidates = this.appDataService.candidates.filter((item:any) =>{

      return item.id != id

    })
  }

}
