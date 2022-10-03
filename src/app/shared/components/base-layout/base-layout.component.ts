/*
============================================
; Title: Bob's Computer Repair Shop (Sprint 1)
; Author: David Rachwalik
; Date: 15 September 2022
; Modified By: Joel Hartung, Allan Trejo, David Rachwalik
;===========================================
*/

// import statements
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Role } from '../../interfaces/role.interface';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();
  role: Role;

  sessionName: string;
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private roleService: RoleService,
  ) {
    this.role = {} as Role;
    this.sessionName = this.cookieService.get('sessionuser');
    console.log(this.sessionName);

    /* assign role a valiue */
    this.roleService
      .findUserRole(this.cookieService.get('sessionuser'))
      .subscribe((res) => {
        this.role = res.data;
        console.log(this.role);
      });
  }

  ngOnInit(): void {}

  // logout function
  logout(): void {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/signin']);
  }
}