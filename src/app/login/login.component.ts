import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginEmail:string=""
  loginPswd:string=""

  constructor(private api:ApiServiceService, private router: Router){}

  login(){
    if(!this.loginEmail || !this.loginPswd){
      Swal.fire({
        title:'Oops',
        text:'please fill the form completely',
        icon:'info',
      })
    }
    else{
      this.api.loginApi().subscribe({
        next:(res:any)=>{
          console.log(res);
          const {email, password} = res
          if(email==this.loginEmail && password==this.loginPswd){
            Swal.fire({
              title:'Wow',
              text:'Login Successfull',
              icon:'success',
            })
            this.router.navigateByUrl('/dashboard')
          }
          else{
            Swal.fire({
              title:'Oops..',
              text:'Invalid mail id or password',
              icon:'error',
            })
          }
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    }
  }
}
