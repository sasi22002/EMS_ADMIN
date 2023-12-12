import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-manage-property',
  templateUrl: './manage-property.component.html',
  styleUrls: ['./manage-property.component.css']
})
export class ManagePropertyComponent {

  apiData: any[] = [];
  filteredData: any[] = [];
  searchText: string = '';

  
  ngOnInit(): void {
    this.propertylist();    

  }
  

  constructor(private authservice:AuthService,private router:Router,private toastr: ToastrService){
    
  }

  search(){
    console.log('wokrkkk')
    console.log(this.searchText)
    this.propertylist()

  }
  propertylist(){
   
    
    this.authservice.getpropertylist(this.searchText).subscribe((res:any)=>
    {
      this.apiData = res.data
      this.toastr.success(res.message);


    },
    (error) => {
      this.toastr.error(error.error.message);
    }
)

  }

  redirectToproperty(id:any){
      
    this.router.navigate(['/rems/manage-property/view/',id]);


  }
  


}
