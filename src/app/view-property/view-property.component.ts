import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent {

  id:any;
  apiData:any;
  
  company: any;
  user_data: any;
  response:any;

  
  constructor(private authservice:AuthService,private router:Router,private toastr: ToastrService,private route:ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getproperty();
  }


  private getproperty() {
    this.authservice.viewproperty(this.id).subscribe({
      next: (response: any) => {
        this.user_data = response.data[0];
        this.apiData = response.data[0].units;
        this.toastr.success(response.message);

      },
      error: (error: any) => {
        this.toastr.error(error.error.message)
      },
    });
  }


}
