import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http:HttpClient) {


   }

  


   login(payload:any){

    return this.http.post<any>(
      "http://127.0.0.1:8000/api/login",payload
    )

   }

   getpropertylist(search:any){

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      });
      return this.http.get<any>(
      "http://127.0.0.1:8000/api/admin/manage_property?page=1&item=5&search="+search,
      { headers: headers }

    )

   }


    gettenantlist(search:any){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    });
    return this.http.get<any>(
    "http://127.0.0.1:8000/api/admin/manage_tenant?page=1&item=5&search="+search,
    { headers: headers }

  )

 }

 
 viewtenant(id:any){

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  });
  return this.http.get<any>(
  "http://127.0.0.1:8000/api/admin/manage_tenant?id="+id,
  { headers: headers }

)

}



viewproperty(id:any){

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  });
  return this.http.get<any>(
  "http://127.0.0.1:8000/api/admin/manage_property?id="+id,
  { headers: headers }

)

}

//for dropdown only
listdatatenant(id:any){

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  });
  return this.http.get<any>(
  "http://127.0.0.1:8000/api/admin/list_data?type="+id,
  { headers: headers }

)

}

//for dropdown only
listdataproperty(){

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  });
  return this.http.get<any>(
  "http://127.0.0.1:8000/api/admin/list_data",
  { headers: headers }

)

}


addproperty(payload:any){

  
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  });

  return this.http.post<any>(
    "http://127.0.0.1:8000/api/admin/manage_property",payload,
    { headers: headers }

  )

 }

 
addtenant(payload:any){

  
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  });

  return this.http.post<any>(
    "http://127.0.0.1:8000/api/admin/manage_tenant",payload,
    { headers: headers }

  )

 }

 maptanent(payload:any){

  
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  });

  return this.http.post<any>(
    "http://127.0.0.1:8000/api/admin/manage_tenant_property",payload,
    { headers: headers }

  )

 }
}
