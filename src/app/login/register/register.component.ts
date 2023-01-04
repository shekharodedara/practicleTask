import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  lstorage: any;
  registerForm: FormGroup;
  cities: any;
  countries: any;
  setState: any;
  setCity: any;
  
  constructor(public fb: FormBuilder) {
    this.registerForm = fb.group(
      {
        fullName: ['', [Validators.required, Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
        email: ['', [Validators.required, Validators.email]],
        contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14), Validators.pattern('[0-9]*')]],
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
      }
    );
    this.lstorage = JSON.parse(localStorage.getItem('register')!);
    !this.lstorage ? localStorage.setItem('register', JSON.stringify([])) : null;
  }

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

  selectCity(event: any) {
    for (let i in this.cities) {
      if (this.cities[i].state === event.target.value)
        this.setCity = this.cities[i].cities;
    }
  }

  selectState(event: any) {
    for (let i in this.countries) {
      if (this.countries[i].country === event.target.value)
        this.setState = this.countries[i].states;
    }
  }

  submitForm(data: any) {
    this.lstorage = JSON.parse(localStorage.getItem('register')!);
    this.lstorage.push(data);
    localStorage.setItem('register', JSON.stringify(this.lstorage));
    alert('data submited successfully');
    this.registerForm.reset();
  }

}
