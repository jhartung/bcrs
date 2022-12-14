
/*
============================================
; Title: Bob's Computer Repair Shop (Sprint 1)
; Author: Professor Krasso
; Date: 16 September 2022
; Modified By: Joel Hartung, Allan Trejo, David Rachwalik
;===========================================
*/
// import statements
import { SelectedSecurityQuestion } from "./selected-security-question.interface";
import { Role } from 'src/app/shared/interfaces/role.interface';
// export User interface
export interface User {
  _id?: string;
  userName?: string;
  password?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  email: string;
  selectedSecurityQuestions?: SelectedSecurityQuestion[];
  role?: Role;
}


