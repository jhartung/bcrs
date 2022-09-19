import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityQuestionService } from 'src/app/shared/services/security-question.service';
import { SecurityQuestion } from 'src/app/shared/interfaces/security-question.interface';

@Component({
  selector: 'app-security-question-create',
  templateUrl: './security-question-create.component.html',
  styleUrls: [ './security-question-create.component.scss' ]
})
export class SecurityQuestionCreateComponent implements OnInit {
  form: FormGroup = this.fb.group({
    text: [ null, Validators.compose([ Validators.required ]) ]
  });

  constructor (private fb: FormBuilder, private router: Router, private securityQuestionService: SecurityQuestionService) { }

  ngOnInit(): void {

  }

  create(): void {
    const newSecurityQuestion: SecurityQuestion = {
      text: this.form.controls[ 'text' ].value,
    };

    this.securityQuestionService.createSecurityQuestion(newSecurityQuestion).subscribe({
      next: (res: any) => {
        this.router.navigate([ '/security-questions' ]);
      },
      error: (e: any) => {
        console.log(e);
      }
    });
  }
  cancel(): void {
    this.router.navigate([ '/security-questions' ]);
  }
}
