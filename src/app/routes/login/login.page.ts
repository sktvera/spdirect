


import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { environment} from '../../../environments/environment'
import { Amplify, Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public typePassShow:boolean = true

  formData:{}={
    email:'',
    password:'',
  }
  
constructor(private router: Router) {
  Amplify.configure(environment);

}
  ngOnInit(): void {

  }

/*   login(formData: any) {

    console.log('Email:', formData.email);
    console.log('Contraseña:', formData.password);

    
  } */


/*   async login(formData: any) {
   
    console.log(formData)
  } */


  async login(formData: any) {
    try {
      const user = await Auth.signIn(formData.email, formData.password);
      console.log('Usuario autenticado:', user);
      // Redirecciona a la ruta /channels después de un inicio de sesión exitoso
      this.router.navigate(['/channels']);
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  }
}