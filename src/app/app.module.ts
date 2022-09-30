/*
============================================
; Title: Bob's Computer Repair Shop (Sprint 1)
; Author: Professor Krasso
; Date: 21 September 2022
; Modified By: Joel Hartung, Allan Trejo, David Rachwalik
;===========================================
*/

// import statements
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RoleListComponent } from './pages/role-list/role-list.component';
import { RoleDetailsComponent } from './pages/role-details/role-details.component';
import { RoleCreateComponent } from './pages/role-create/role-create.component';


// Only import [BrowserModule, BrowserAnimationsModule] once!
// All other shared/feature modules will use [CommonModule]
// https://dev.to/sanketmaru/import-once-browser-module-1pie

@NgModule({
  declarations: [AppComponent, RoleListComponent, RoleDetailsComponent, RoleCreateComponent],
  imports: [
    // Core imports
    BrowserModule,
    BrowserAnimationsModule,
    // Routing imports
    AppRoutingModule,
    // Shared imports
    SharedModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
