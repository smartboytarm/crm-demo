import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule  } from '@angular/core';
=======
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
>>>>>>> 901581493f8dd814da39abe5b56a448aa6e2ba1c

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ClarityModule } from '@clr/angular';
import { LayoutModule } from './layout/layout.module';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
=======
import { LayoutModule } from './layout/layout.module';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 901581493f8dd814da39abe5b56a448aa6e2ba1c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    LayoutModule,
    ClarityModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
=======
    ClarityModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
>>>>>>> 901581493f8dd814da39abe5b56a448aa6e2ba1c
})
export class AppModule { }
