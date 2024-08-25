import {Component, inject} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  authService:AuthService = inject(AuthService);

  form:FormGroup<{username:FormControl,password:FormControl}> = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })

  onSubmit() {
    if(this.form.valid){
      //@ts-ignore
      this.authService.login(this.form.value).subscribe(res => {
        console.log(res);
      });
    }
  }
}

/*  form: FormGroup<{ username: FormControl<string | null>; password: FormControl<string | null> }> = new FormGroup({
    username: new FormControl<string | null>(null, [Validators.required]),
    password: new FormControl<string | null>(null, [Validators.required]),
  });

  onSubmit(event: Event) {
    if (this.form.valid) {

      const formValue = {
        username: this.form.value.username ?? '',
        password: this.form.value.password ?? ''
      };
      console.log(this.form.value);
      //@ts-ignore
      this.authService.login(this.form.value);
    }
  }
}*/
