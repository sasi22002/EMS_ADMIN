import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from 'src/services/auth.service';



@Component({
  selector: 'app-view-tenent',
  templateUrl: './view-tenent.component.html',
  styleUrls: ['./view-tenent.component.css']
})
export class ViewTenentComponent {

  company: any;
  id:any;
  user_data: any;
  response:any;
  apiData:any;
  

  constructor(private authservice:AuthService,private router:Router,private toastr: ToastrService,private route:ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getVendor();
  }


  private getVendor() {
    this.authservice.viewtenant(this.id).subscribe({
      next: (response: any) => {
        this.user_data = response;
        this.user_data = response.data[0].user_data;
        this.response = response.data[0];        
        // this.company = response.company_details[0];
        this.apiData = this.response.properties;
        this.toastr.success(response.message);


      },
      error: (error: any) => {
        this.toastr.error(error.error.message)
      },
    });
  }

}
