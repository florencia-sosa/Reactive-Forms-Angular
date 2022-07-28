import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.setUpForm();
  }

  public setUpForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }
  public onSubmit() {
    this.date()
  }
  public date() {
    let firtName = this.registrationForm.value.firtName || '';
    let lastName = this.registrationForm.value.lastName || '';
    let email = this.registrationForm.value.email || '';
    let notificacion = `Te has registrado éxitosamente ${firtName} ${lastName}.
   A continuación de llegará un email a ${email}`
    alert(notificacion)
  }
}



