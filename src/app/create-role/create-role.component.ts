import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  userName: any;
  data={
    "active": true,
    "tenant_id": 23,
    "name": ""
  }

  constructor(private user_roles: RolesService, private router: Router) { }

  ngOnInit(): void {
  }



  createRole() {

    this.userName = (<HTMLSelectElement>document.getElementById('rname')).value;

    this.data.name = this.userName;

    this.user_roles.createRole(this.data).subscribe((result:any)=>{
      this.router.navigateByUrl('/user-roles');
    })
    

  }

}
