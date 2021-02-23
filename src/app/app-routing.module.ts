import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { HomeComponent } from './home/home.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
const routes: Routes = [
  //{path: "**", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "user-roles", component: UserRolesComponent},
  {path:"create-role", component: CreateRoleComponent},
  {path:"edit-role/:name/:id", component: EditRoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
