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
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRoleComponent } from './create-role/create-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ApexReportComponent } from './apex-report/apex-report.component';
import { NgApexchartsModule, ApexChart } from 'ng-apexcharts';



@NgModule({
  declarations: [
    AppComponent,
    UserRolesComponent,
    HomeComponent,
    RoleSearchPipe,
    CreateRoleComponent,
    EditRoleComponent,
    ApexReportComponent
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
    NgApexchartsModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
