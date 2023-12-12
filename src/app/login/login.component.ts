import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logEmailForm!: FormGroup;
  email: string = '';
  password: string = '';


  constructor(private authservice:AuthService,private router:Router,private toastr: ToastrService){
    
  }

  loginclick(){
   
    let payload ={
      email:this.email,
      password:this.password,
      role:1
    }
    this.authservice.login(payload).subscribe((res:any)=>
    {
      sessionStorage.setItem("token", res.data[0].access_token);
      this.toastr.success(res.message);


      this.router.navigate(['/rems']);
    },
    (error) => {
      this.toastr.error(error.error.message);
    }
)

  }

}


