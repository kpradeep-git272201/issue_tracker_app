import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ChangeDetectorRef } from '@angular/core';


import { AuthService } from '../../../services/planning/auth.service';


@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  
  /* loginForm: FormGroup | any;
  hide = true;
  captchaText: string = '';
  captchaInput: string = '';

  
  invalidLoginCount:number = 0;
  constructor( private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<LoginComponent>){
  } */

      loginForm: FormGroup;
      hide = true;
      captchaText: string = '';
      captchaInput: string = '';
      invalidLoginCount: number = 0;
    
      constructor(
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<LoginComponent>,
        private cdRef: ChangeDetectorRef
        
      ) {
        this.loginForm = this.fb.group({
          username: ['', [Validators.required, Validators.minLength(5)]],
          password: ['', [Validators.required, Validators.minLength(6)]]
        });
        
      }

  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      captchaText: [''],
      captchaInput: ['']
    });
  
    this.generateCaptcha();
  }
  

  generateCaptcha(): void {
    const canvas = document.getElementById('captchaCanvas') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
  
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  
    this.captchaText = captcha;
    this.loginForm.controls['captchaText'].setValue(captcha); 
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
   
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(1, '#dcdcdc'); 
    gradient.addColorStop(0, '#a9a9a9'); 
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#000';
    ctx.setTransform(1, 0.2, 0.1, 1, 0, 0);
    ctx.fillText(this.captchaText, 15, 20); 
    ctx.font = '20px monospace';

    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0); 
  }

/* 
  onSubmit() {
    if (this.loginForm.valid) {
      const loginData=this.loginForm.getRawValue();
      this.count++;
      if (this.count >= 5 && loginData.captchaInput !== loginData.captchaText) {
      alert('Captcha does not match!');
      this.generateCaptcha(); // regenerate if wrong
      this.updateCaptchaValidator(this.count);
      return;
    }
    const success = this.authService.login(loginData.username, loginData.password);
    if (success) {
      this.dialogRef.close();
      // this.router.navigate(['/dashboard']); // protected route
    } else {
      this.updateCaptchaValidator(this.count);
      this.generateCaptcha(); // optionally regenerate captcha
    }
      // this.dialogRef.close();
    }
  } */

  updateCaptchaValidator(count: number) {
    const captchaControl = this.loginForm.get('captchaInput');
    if (!captchaControl) return;
  
    if (count >= 5) {
      captchaControl.setValidators([Validators.required]);
    } else {
      captchaControl.clearValidators();
    }
  
    captchaControl.updateValueAndValidity();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
