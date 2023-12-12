import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {

  
  constructor(private authservice:AuthService,private router:Router,private toastr: ToastrService){
    
  }
  
 userform:FormGroup = new FormGroup(
  {
    ul_pin:new FormControl(""),
    pincode:new FormControl(""),
    property_name:new FormControl(""),
    address:new FormControl(""),
    lattitude:new FormControl("127.09.376"),
    longtitude:new FormControl("127.09.376.998"),
    features:new FormControl({}),
    units:new FormControl([]),
    base_rent:new FormControl([]),
    cost:new FormControl([]),
    
  }
 );
 


 addprop(){

  let payload = this.userform.value;

  payload.units = [{
    unit_id:Number(this.userform.value.units),
    base_rent:payload.base_rent,
    cost:payload.cost
  }]

  this.authservice.addproperty(this.userform.value).subscribe((res:any)=>{
    this.toastr.success(res.message);
    this.router.navigate(['/rems/manage-property'])
  },
  (error) => {
    this.toastr.error(error.error.message);
  })


  

 }

}
