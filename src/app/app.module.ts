import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ngxTranslate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { BackgroundMode } from "@ionic-native/background-mode/ngx"
import { ShareDataService } from './share-data.service'; // 


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    BackgroundMode,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    Deeplinks,
    AppVersion,
    ShareDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
