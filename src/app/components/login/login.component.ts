import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent  {
//   loginForm!: FormGroup;
// constructor(private fb:FormBuilder){}
// ngOnInit(): void{
//   this.loginForm=this.fb.group({
//     username: ['',[Validators.required]],
//     email:['',[Validators.required, Validators.email]]
//   });
// }
// onSubmit(): void{
//   if (this.loginForm.valid){
//     const formValues=this.loginForm.value;
//     alert('Login successful');
//   }
//   else{
//     alert('Form is invalid')
//   }
// }
username: string='';
password: string='';
email: string='';
loginError: string='';


constructor(private router: Router, private userService:UserService ) {}
 
 

 login(): void {
   if (this.userService.checkUserExistence(this.username)) {
     this.loginError = '';
     this.router.navigate(['/add-user']);
   } else {
     this.loginError = 'User not found';
   }
 }

}
