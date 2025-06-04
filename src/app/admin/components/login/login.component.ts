import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../services/planning/auth.service';
import { Router } from '@angular/router';
import { AccountingService } from '../../../services/restricted/accounting/accounting.service';
import { Md5 } from 'ts-md5';


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
    if (this.loginForm.valid) {
      const loginData = this.loginForm.getRawValue();
      // Check captcha only if count >= 3
      if (this.count >= 3 && loginData.captchaInput !== loginData.captchaText) {
        this.generateCaptcha(); // regenerate if wrong
        this.updateCaptchaValidator(this.count);
        return;
      }
      const password=loginData.password
      const md5HashedPassword = Md5.hashStr(password);
      const requestBody = {
        username: loginData.username?.toUpperCase(),
        password: md5HashedPassword,
      };
      this.authService.getLogin(requestBody).subscribe(
        (resp) => {
          if (resp?.status == 200) {
            localStorage.setItem('loggedUser', JSON.stringify(resp.body));
            // localStorage.setItem('token', resp.headers.get('authorization'));
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQUi1BTktJQS1WLUFETSIsInJvbGUiOiJWQSIsImVudGl0eUNvZGUiOjEzNDI1MywieWVhciI6IjIwMjQtMjAyNSIsImRpc3RyaWN0IjozNTUsInN0YXRlQ29kZSI6MjMsImVudGl0eVR5cGVJZCI6MSwidXNlcklkIjo0NjIyODEsInN1YkRpc3RyaWN0Ijo0MTQwLCJpYXQiOjE3NDkwMTQ4NTgsImV4cCI6MTc0OTEwMTI1OH0.dE10UhdgzMjbWzN-PjPL-peieykkvFlcnZycnCQrl1w');
            console.log('User authenticated'); 
            this.dialogRef.close();
            this.router.navigate(['/restricted']);
          } else {
            console.log('Authentication failed');
            this.count++;
            this.updateCaptchaValidator(this.count);
            if (this.count >= 3) {
              this.generateCaptcha(); // regenerate captcha after failed attempt
            }
          }
        },
        (error) => {
          // Handle error from backend
          console.log('Login error', error);
          this.count++;
          this.updateCaptchaValidator(this.count);
          if (this.count >= 3) {
            this.generateCaptcha();
          }
        },
      );
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

  getLogin() {
    const requestBody = {
      username: 'PR-ANKIA-V-ADM',
      password: '0e7517141fb53f21ee439b355b5a1d0a',
    };
    this.authService.getLogin(requestBody).subscribe((resp) => {
      if (resp?.status == 200) {
        
        localStorage.setItem('loggedUser', resp.body);
          localStorage.setItem('token', resp.headers.get('authorization'));
        // localStorage.setItem('token', resp.body.Data.token);
        console.log('User authenticated');
        this.dialogRef.close();
        this.router.navigate(['/restricted']); // protected route
      } else {
        console.log('Authentication failed');
      }
    });
  }
}
