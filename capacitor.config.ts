import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spdirect.app',
  appName: 'spdirect',
  webDir: 'dist/spdirect',
  server: {
    androidScheme: 'https'
  }
};

export default config;
