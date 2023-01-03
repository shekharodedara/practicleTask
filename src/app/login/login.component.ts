import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
<<<<<<< HEAD
  lstorage:any;
  constructor(public fb: FormBuilder, public router: Router) {
    this.loginForm = fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
    this.lstorage = JSON.parse(localStorage.getItem('register')!);
   }

  ngOnInit(): void {
  }

  login(data:any){
    for(let i of this.lstorage){
      if((i.email == data.username || i.fullName == data.username) && i.password == data.password){
      this.router.navigate(['/home'])
      return;}
    }
    alert('invalid username or password')
  }
=======
  lstorage: any;

  animal: string;
  name: string;

  constructor(public fb: FormBuilder, public router: Router, public dialog: MatDialog) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.lstorage = JSON.parse(localStorage.getItem('register')!);
  }

  ngOnInit(): void { }

  login(data: any) {
    for (let i of this.lstorage) {
      if ((i.email == data.username || i.fullName == data.username) && i.password == data.password) {
        this.router.navigate(['/home'])
        return;
      }
    }
    alert('invalid username or password')
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExampleDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}



@Component({
  selector: 'example-dialog',
  templateUrl: 'example-dialog.html',
})
export class ExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<ExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
}
