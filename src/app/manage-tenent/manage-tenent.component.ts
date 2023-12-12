import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-manage-tenent',
  templateUrl: './manage-tenent.component.html',
  styleUrls: ['./manage-tenent.component.css']
})
export class ManageTenentComponent {

  
  apiData: any[] = [];
  searchText: string = '';

  
  ngOnInit(): void {
    this.tenantlist();    

  }
  

  constructor(private authservice:AuthService,private router:Router,private toastr: ToastrService){
    
  }




  tenantlist(){
   
    
    this.authservice.gettenantlist(this.searchText).subscribe((res:any)=>
    {
      this.apiData = res.data
      this.toastr.success(res.message);

    },
    (error) => {
      this.toastr.error(error.error.message);
    }
)

  }

  search(){
    this.tenantlist()

  }
  redirectToViewPage(id:any){
    this.router.navigate(['/rems/manage-tenent/view/',id]);

  }

}
