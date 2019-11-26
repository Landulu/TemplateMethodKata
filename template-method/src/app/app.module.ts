import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamtaroComponent } from './hamtaro/hamtaro.component';
import { RhinoferosComponent } from './rhinoferos/rhinoferos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

const appRoutes: Routes = [
  { path: 'hamtaro', component: HamtaroComponent },
  { path: 'rhinoferos', component: RhinoferosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HamtaroComponent,
    RhinoferosComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
