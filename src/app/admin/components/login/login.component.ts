import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../services/planning/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/restricted/api.service';

@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup | any;
  hide = true;
  captchaText: string = '';
  captchaInput: string = '';
  count: number = 0;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<LoginComponent>,
    private cdRef: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      captchaText: [''],
      captcha: [''],
    });

    this.generateCaptcha();
  }

  generateCaptcha(): void {
    const canvas = document.getElementById(
      'captchaCanvas',
    ) as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captcha = Array.from({ length: 6 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length)),
    ).join('');

    this.captchaText = captcha;
    this.loginForm.controls['captchaText'].setValue(captcha);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height,
    );
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

  onSubmit() {
    this.getLogin();
    if (this.loginForm.valid) {
      const loginData = this.loginForm.getRawValue();
      this.count++;
      if (this.count >= 5 && loginData.captchaInput !== loginData.captchaText) {
        alert('Captcha does not match!');
        this.generateCaptcha(); // regenerate if wrong
        this.updateCaptchaValidator(this.count);
        return;
      }
      const success = this.authService.login(
        loginData.username,
        loginData.password,
      );
      if (success) {
        this.dialogRef.close();
        this.router.navigate(['/restricted']); // protected route
      } else {
        this.count++;
        this.updateCaptchaValidator(this.count);
        this.generateCaptcha(); // optionally regenerate captcha
      }
      // this.dialogRef.close();
    }
  }

  updateCaptchaValidator(count: number) {
    const captchaControl = this.loginForm.get('captcha');
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

  resetForm(): void {
    this.loginForm.reset();
    this.count = 0;
    this.updateCaptchaValidator(this.count);

    const canvas = document.getElementById(
      'captchaCanvas',
    ) as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    this.cdRef.detectChanges();
  }


 getLogin(){
  this.apiService.getDataFromEgram().subscribe((resp)=>{
    console.log(resp);
  })
// //requestBody:any
//     this.apiService.login({
//     "username":"PR-ANKIA-V-ADM",
//     "password":"0e7517141fb53f21ee439b355b5a1d0a"
// }).subscribe((resp)=>{
//   console.log(resp);
//     })
  }
}
