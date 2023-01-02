import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  lstorage:any;
  today:any = new Date();
  date95:any = new Date('01-01-1995');
  toggle:boolean = false;
  submit:boolean = true;
  studentForm:FormGroup;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  id:number;
  status:any;

  // @ViewChild(MatSort)sort: MatSort;
  constructor(public fb: FormBuilder, public router: Router, public cd:ChangeDetectorRef) {
    this.studentForm = fb.group(
      {
        fullName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
        email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern('[0-9]*')]],
        dob: ['', Validators.required],
        std: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        percentage: ['', [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('[0-9]*')]]
      }
    );
    this.lstorage = JSON.parse(localStorage.getItem('studentList')!)
    this.dataSource = new MatTableDataSource(this.lstorage);
    this.displayedColumns = ['fullName','email', 'contact', 'dob', 'std', 'percentage', 'status', 'action'];    
    !this.lstorage ? localStorage.setItem('studentList', JSON.stringify([])) : null;
   }

  ngAfterViewChecked(): void {    
    // this.lstorage = JSON.parse(localStorage.getItem('studentDetail')!);
    this.dataSource = new MatTableDataSource(this.lstorage);
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  SubmitData(data:any){
    this.lstorage = JSON.parse(localStorage.getItem('studentList')!)
    data.percentage <= 35 || data.percentage <= '35' ? this.status = {'status' : 'Fail'} : this.status = {'status' : 'Pass'}
    let newData = Object.assign(data,this.status)
    if(this.submit){
      this.lstorage.push(newData)      
    }
    else if(!this.submit){
      this.lstorage[this.id] = newData;
      this.submit = true;
    }
    localStorage.setItem('studentList', JSON.stringify(this.lstorage))
    this.toggle = false;
    this.studentForm.reset();
    location.reload();
  }

  update(i:number,element:any){
    this.toggle = true;
    this.submit = false;
    this.id = i;
    this.studentForm.setValue(element)
  }

  delete(i:number){
  if(confirm('are you sure you want to delete this record')){
    this.lstorage = JSON.parse(localStorage.getItem('studentList')!)
    this.lstorage.splice(i,1)
    localStorage.setItem('studentList', JSON.stringify(this.lstorage))
  }
  location.reload();
  }

  filterTable(event: any) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }

  onChange(event: MatTabChangeEvent){
    event.index === 3 ? this.router.navigate(['/login']) : null;
  }
  add(){
    this.toggle = !this.toggle
    this.submit = true;
  }
}
