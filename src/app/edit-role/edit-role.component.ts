import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
  userName: any;
  id: any;

  constructor(private route: ActivatedRoute, private user_roles: RolesService, private router: Router) { }

  data: any = [];

  ngOnInit(): void {
    this.loadData();
    this.userName = this.route.snapshot.paramMap.get("name");
    this.id = this.route.snapshot.paramMap.get("id");

    // console.log(this.userName, this.id);

  }

  loadData() {
    this.user_roles.getRoles().subscribe((result: any) => {
      // console.log(result['data'])
      let data = result['data'];
      this.data = data['roleList']
    })
  }

  updateRoleName(id: any) {
    //console.log(id)
    let roleData;

    this.userName = (<HTMLSelectElement>document.getElementById('rname')).value;
    console.log(this.userName)

    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        console.log(this.data[i]);
        roleData = this.data[i];
      }
    }


    //console.log(roleData);

    roleData.name=this.userName

    this.user_roles.updateRole(roleData).subscribe((result:any)=>{
      this.router.navigateByUrl('/user-roles');
    })

  }

}
