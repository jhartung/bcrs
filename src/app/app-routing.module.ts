/*
============================================
; Title: Bob's Computer Repair Shop (Sprint 1)
; Author: Professor Krasso
; Date: 24 September 2022
; Modified By: Joel Hartung, Allan Trejo, David Rachwalik
;===========================================
*/

// import statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component imports
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { RoleCreateComponent } from './pages/roles/role-create/role-create.component';
import { RoleDetailsComponent } from './pages/roles/role-details/role-details.component';
import { RoleListComponent } from './pages/roles/role-list/role-list.component';
import { SecurityQuestionCreateComponent } from './pages/security-questions/security-question-create/security-question-create.component';
import { SecurityQuestionDetailsComponent } from './pages/security-questions/security-question-details/security-question-details.component';
import { SecurityQuestionListComponent } from './pages/security-questions/security-question-list/security-question-list.component';
import { ServiceRepairComponent } from './pages/service-repair/service-repair.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './shared/components/base-layout/base-layout.component';
import { ResetPasswordFormComponent } from './shared/components/forms/reset-password-form/reset-password-form.component';
import { VerifySecurityQuestionsFormComponent } from './shared/components/forms/verify-security-questions-form/verify-security-questions-form.component';
import { VerifyUsernameFormComponent } from './shared/components/forms/verify-username-form/verify-username-form.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RoleGuard } from './shared/guards/role.guard';

// routes
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [ RoleGuard ] // RoleGuard - only those with 'admin' privileges can view
      },
      {
        path: 'users',
        component: UserListComponent,
        canActivate: [ RoleGuard ]
      },
      {
        path: 'users/:userId',
        component: UserDetailsComponent,
        canActivate: [ RoleGuard ]
      },
      {
        path: 'users/create/new',
        component: UserCreateComponent,
        canActivate: [ RoleGuard ]
      },
      {
        path: 'security-questions',
        component: SecurityQuestionListComponent,
        canActivate: [ RoleGuard ]
      },
      {
        path: 'security-questions/:questionId',
        component: SecurityQuestionDetailsComponent,
        canActivate: [ RoleGuard ]
      },
      {
        path: 'security-questions/create/new',
        component: SecurityQuestionCreateComponent,
        canActivate: [ RoleGuard ]
      },
      {
        path: 'roles',
        component: RoleListComponent,
        canActivate: [ RoleGuard ]
      },
      {
        path: 'roles/:roleId',
        component: RoleDetailsComponent,
        canActivate: [ RoleGuard ]
      },
      {
        path: 'roles/create/new',
        component: RoleCreateComponent,
        canActivate: [ RoleGuard ]
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'services',
        component: ServiceRepairComponent,
      },
    ],
    canActivate: [ AuthGuard ], // Applies AuthGuard to routes
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot',
        component: VerifyUsernameFormComponent,
      },
      {
        path: 'verify-security-questions',
        component: VerifySecurityQuestionsFormComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordFormComponent,
      },
      {
        path: '404',
        component: NotFoundComponent,
      },
      {
        path: '500',
        component: ErrorComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'session/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
