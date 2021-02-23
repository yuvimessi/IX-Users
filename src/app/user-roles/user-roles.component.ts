import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  data: any = [];
  totalRecords: any
  page: number = 1;
  searchValue: any
  order: any;


  constructor(private user_roles: RolesService, private router: Router) {
  }

  ngOnInit(): void {

    this.loadData();
  }



  loadData() {
    this.user_roles.getRoles().subscribe((result: any) => {
      console.log(result['data'])
      let data = result['data'];
      //this.response = response.data.roleList[0]
      this.data = data['roleList']
      this.totalRecords = data['roleList'].length
      console.log(data)
      console.log(this.totalRecords = data['roleList'].length)
    })
  }

  loadAll(){
    this.user_roles.getAll().subscribe((result: any) => {
      console.log(result['data'])
      let data = result['data'];
      //this.response = response.data.roleList[0]
      this.data = data['roleList']
      this.totalRecords = data['roleList'].length
      console.log(data)
      console.log(this.totalRecords = data['roleList'].length)
    })
  }

  loadInactive(){
    this.user_roles.getUInactive().subscribe((result: any) => {
      console.log(result['data'])
      let data = result['data'];
      //this.response = response.data.roleList[0]
      this.data = data['roleList']
      this.totalRecords = data['roleList'].length
      console.log(data)
      console.log(this.totalRecords = data['roleList'].length)
    })
  }


  deactivateRole(id: any) {
    // this.loadData();
    console.log(id)
    let roleData;

    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        console.log(this.data[i]);
        roleData = this.data[i];
      }
    }

    roleData.active=false;

    this.user_roles.updateRole(roleData).subscribe((result:any)=>{
      this.ngOnInit();
      //this.router.navigateByUrl('/user-roles');
      // console.log(result['data'])
    })

  }

}
