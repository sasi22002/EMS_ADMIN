import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-tenant-property',
  templateUrl: './map-tenant-property.component.html',
  styleUrls: ['./map-tenant-property.component.css']
})
export class MapTenantPropertyComponent {
  
  dropdownOptions: any[] = [];
  dropdownprop: any[] = [];
  

  userform:FormGroup = new FormGroup(
    {
      tenant:new FormControl(""),
      properties:new FormControl(""),
      duration_days:new FormControl(""),
      monthly_rent:new FormControl(""),
      prop_val:new FormControl("")
      
    }
   );

  constructor(private authservice: AuthService,private toastr: ToastrService,private router:Router) {}

  ngOnInit() {
    this.authservice.listdatatenant(1).subscribe(options => {
      this.dropdownOptions = options.data;
      
    });

    this.authservice.listdatatenant("").subscribe(options => {
      this.dropdownprop = options.data;
      
    });
  }


  addmaps(){
    
  let payload = this.userform.value;
  payload.tenant = Number(this.userform.value.tenant)

  payload.properties = [{
    property:Number(this.userform.value.prop_val),
    duration_days:Number(payload.duration_days),
    monthly_rent:payload.monthly_rent,
    aggrement_date:String("2023-12-12")
  }]
       
    console.log(this.userform.value.tenant)


    this.authservice.maptanent(this.userform.value).subscribe((res:any)=>{
      this.toastr.success(res.message);
      this.ngOnInit()
    },
    (error) => {
      this.toastr.error(error.error.message);
    })

  }


}
