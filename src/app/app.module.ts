import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UserRolesComponent } from './user-roles/user-roles.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RoleSearchPipe } from './role-search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllRolesComponent } from './all-roles/all-roles.component';
import { ActiveRolesComponent } from './active-roles/active-roles.component';
import { InactiveRolesComponent } from './inactive-roles/inactive-roles.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRolesComponent,
    HomeComponent,
    RoleSearchPipe,
    AllRolesComponent,
    ActiveRolesComponent,
    InactiveRolesComponent,
    CreateRoleComponent,
    EditRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    // Ng2OrderModule,
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
