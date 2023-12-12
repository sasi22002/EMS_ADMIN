import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-add-tenent',
  templateUrl: './add-tenent.component.html',
  styleUrls: ['./add-tenent.component.css']
})
export class AddTenentComponent {


  
  constructor(private authservice:AuthService,private router:Router,private toastr: ToastrService){
    
  }
  
 userform:FormGroup = new FormGroup(
  {
    username:new FormControl(""),
    email:new FormControl(""),
    role:new FormControl(2),
    phone_number:new FormControl(""),
    password:new FormControl("tenant"),
    occupation:new FormControl(""),
    own_business:new FormControl(false),
    is_salaried:new FormControl(true)
    
  }
 );



  
 addprop(){

  let payload = this.userform.value;

  payload.confirm_password = this.userform.value.password
  payload.document = []

  this.authservice.addtenant(this.userform.value).subscribe((res:any)=>{
    this.router.navigate(['/rems/manage-tenent'])
    this.toastr.success(res.message);

  },
  (error) => {
    this.toastr.error(error.error.message);
  }
  )


  

 }

}
