import { Component, OnInit } from '@angular/core';
/* import {  Auth } from 'aws-amplify'; */

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
 
  repeatedPassword!: String;

  showPassword: boolean = false;

  constructor() { }

toggleShowPassword() {
    this.showPassword = !this.showPassword;
    console.log('Estado del checkbox:', this.showPassword);
  }

  ngOnInit() {
  }

  async register() {
   
 /*   try {
    const signUpResponse = await Auth.signUp({
      username: this.firstName,
      password: this.password,
      attributes: {
        email: this.email, 
        given_name: this.firstName,
        family_name: this.lastName 
      }

    });
    console.log('Usuario registrado:', signUpResponse);
   
  } catch (error) {
    console.log('Error al registrar:', error);
   
    // Maneja el error (por ejemplo, muestra un mensaje de error al usuario)
  }



  console.log(
    'firstName: ',this.firstName,
    'lastName: ',this.lastName,
    'password: ',this.password,
    'repeatedPassword: ',this.repeatedPassword,
    'email: ',this.email,
   ) */

  }

}

