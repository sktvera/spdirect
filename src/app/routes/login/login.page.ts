


import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
/* import { Amplify, Auth } from 'aws-amplify';
import { environment} from '../../../environments/environment' */


@Component({
  selector: 'app-access',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public typePassShow:boolean = true
  username!: string;
  password!: string;

  
/* constructor() {
  Amplify.configure(environment);

} */
  ngOnInit(): void {
  }

  



/*   async login() {
    try {
      const user = await Auth.signIn(this.username.toString(), this.password.toString());
      console.log('Usuario autenticado:', user);
      // Redireccionar o realizar acciones después de iniciar sesión
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  } */
}