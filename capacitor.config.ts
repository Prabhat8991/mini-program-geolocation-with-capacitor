import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miniprogram.geolocation',
  appName: 'mini-program-geolocation-with-capacitor',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
