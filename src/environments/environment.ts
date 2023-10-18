import { Amplify } from 'aws-amplify';


export const environment = {
  production: false,
  Auth: {
    // Las credenciales de Cognito deben configurarse aquí
    region: 'us-east-1',
    userPoolId: 'us-east-1_0gGaRoj5f', // Reemplaza con tu Pool ID
    userPoolWebClientId: '3o4s7pfcf03smvmu1i6fngd5ms', // Reemplaza con tu ID de cliente
  }
}



Amplify.configure({
  Auth: {
    region: environment.Auth.region,
    userPoolId: environment.Auth.userPoolId,
    userPoolWebClientId: environment.Auth.userPoolWebClientId,
  },
});