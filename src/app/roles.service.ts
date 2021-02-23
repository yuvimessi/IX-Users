import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RolesService {


  constructor(private http: HttpClient) { }

  token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNCwicm9sZV9pZCI6MzUsImlhdCI6MTYxNDA2OTEyNywiZXhwIjoxNjE0MDc5MTI3fQ.CWHEfkQbcC7C2Y08IaBZk_1HcwSusd48MxNV01fJU08'


  getRoles() {
    const url = 'http://devourin-api-qa.chain-expert.com/role/getrolelist?recordsTofetch=1&tenant_id=23'
    
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.get<any[]>(url, { headers: reqHeader });
  }


  getAll() {
    const url = 'http://devourin-api-qa.chain-expert.com/role/getrolelist?recordsTofetch=3&tenant_id=23'
    
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.get<any[]>(url, { headers: reqHeader });
  }


  getUInactive() {
    const url = 'http://devourin-api-qa.chain-expert.com/role/getrolelist?recordsTofetch=2&tenant_id=23'
    
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.get<any[]>(url, { headers: reqHeader });
  }

  updateRole(roleData: any){
    this.getRoles();
    // data = data["id"];
    const url = 'http://devourin-api-qa.chain-expert.com/role/updaterole'
   
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.put<any[]>(url, roleData, { headers: reqHeader });
  }



}
