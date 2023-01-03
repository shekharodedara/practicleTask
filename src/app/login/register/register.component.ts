import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD
  lstorage:any;
  registerForm: FormGroup;
  cities:any;
  countries:any;
  setState:any;
  setCity:any;
=======
  lstorage: any;
  registerForm: FormGroup;
  cities: any;
  countries: any;
  setState: any;
  setCity: any;
  
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
  constructor(public fb: FormBuilder) {
    this.registerForm = fb.group(
      {
        fullName: ['', [Validators.required, Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
        email: ['', [Validators.required, Validators.email]],
        contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14), Validators.pattern('[0-9]*')]],
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
<<<<<<< HEAD
        city: ['',[Validators.required]],
=======
        city: ['', [Validators.required]],
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
      }
    );
    this.lstorage = JSON.parse(localStorage.getItem('register')!);
    !this.lstorage ? localStorage.setItem('register', JSON.stringify([])) : null;
<<<<<<< HEAD
   }
=======
  }
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063

  ngOnInit(): void {
    this.countries = [
      { country: 'Canada', states: ['calgary', 'ontario', 'toronto'] },
      { country: 'India', states: ['Gujarat', 'Mumbai', 'Delhi'] },
      { country: 'UK', states: ['London', 'Lesister', 'Bermingham'] },
    ];
    this.cities = [
      { state: 'calgary', cities: ['cal', 'cal-1', 'cal-2'] },
      { state: 'ontario', cities: ['ont', 'ont-1', 'ont-2'] },
      { state: 'toronto', cities: ['tor', 'tor-1', 'tor-2'] },
      { state: 'Gujarat', cities: ['guj', 'guj-1', 'guj-2'] },
      { state: 'Mumbai', cities: ['mum', 'mum-1', 'mum-2'] },
      { state: 'Delhi', cities: ['del', 'del-1', 'del-2'] },
      { state: 'London', cities: ['lon', 'lon-1', 'lon-2'] },
      { state: 'Lesister', cities: ['les', 'les-1', 'les-2'] },
      { state: 'Bermingham', cities: ['ber', 'ber-1', 'ber-2'] },
    ];
  }

<<<<<<< HEAD
  selectCity(event:any){
=======
  selectCity(event: any) {
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
    for (let i in this.cities) {
      if (this.cities[i].state === event.target.value)
        this.setCity = this.cities[i].cities;
    }
  }
<<<<<<< HEAD
  selectState(event:any){
    for (let i in this.countries) {
      if (this.countries[i].country === event.target.value)
        this.setState = this.countries[i].states;
    } 
  }
  initCity(){}
  initState(){}
  submitForm(data:any){
    this.lstorage.push(data)
    localStorage.setItem('register', JSON.stringify(this.lstorage))
    alert('data submited successfully')
    this.registerForm.reset()
=======

  selectState(event: any) {
    for (let i in this.countries) {
      if (this.countries[i].country === event.target.value)
        this.setState = this.countries[i].states;
    }
  }

  submitForm(data: any) {
    this.lstorage.push(data);
    localStorage.setItem('register', JSON.stringify(this.lstorage));
    alert('data submited successfully');
    this.registerForm.reset();
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
  }

}
